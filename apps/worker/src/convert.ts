import { execFile } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export type ConversionType = "pdf-to-word" | "word-to-pdf";

interface ConversionSpec {
  inputExtensions: string[];
  officeFormat: string; // format passed to `soffice --convert-to`
  outputExtension: string;
  outputContentType: string;
  /**
   * Forces LibreOffice to open the input with a specific import filter.
   * Without this, soffice opens a bare .pdf in Draw (as vector shapes),
   * which has no docx export filter. `writer_pdf_import` forces it to
   * import into Writer as editable text instead.
   */
  infilter?: string;
}

export const CONVERSIONS: Record<ConversionType, ConversionSpec> = {
  "pdf-to-word": {
    inputExtensions: [".pdf"],
    officeFormat: "docx",
    outputExtension: ".docx",
    outputContentType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    infilter: "writer_pdf_import",
  },
  "word-to-pdf": {
    inputExtensions: [".doc", ".docx"],
    officeFormat: "pdf",
    outputExtension: ".pdf",
    outputContentType: "application/pdf",
  },
};

const SOFFICE_BINARY = process.env.SOFFICE_BINARY || "soffice";
const CONVERSION_TIMEOUT_MS = 90_000;

export class ConversionError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
  ) {
    super(message);
  }
}

export async function convertFile(
  type: ConversionType,
  originalFilename: string,
  inputBuffer: Buffer,
): Promise<{ buffer: Buffer; filename: string; contentType: string }> {
  const spec = CONVERSIONS[type];
  const inputExt = path.extname(originalFilename).toLowerCase();

  if (!spec.inputExtensions.includes(inputExt)) {
    throw new ConversionError(
      `Unsupported input file type "${inputExt}" for conversion "${type}". Expected one of: ${spec.inputExtensions.join(", ")}`,
      400,
    );
  }

  const jobId = randomUUID();
  const workDir = await mkdtemp(path.join(tmpdir(), `fileati-${jobId}-`));
  const profileDir = path.join(workDir, "profile");

  try {
    await mkdir(profileDir, { recursive: true });

    const inputPath = path.join(workDir, `input${inputExt}`);
    await writeFile(inputPath, inputBuffer);

    await runSoffice([
      `-env:UserInstallation=file://${toUnixPath(profileDir)}`,
      "--headless",
      "--nologo",
      "--nofirststartwizard",
      "--norestore",
      ...(spec.infilter ? [`--infilter=${spec.infilter}`] : []),
      "--convert-to",
      spec.officeFormat,
      "--outdir",
      workDir,
      inputPath,
    ]);

    const baseName = path.parse(inputPath).name;
    const outputPath = path.join(workDir, `${baseName}${spec.outputExtension}`);
    const outputBuffer = await readFile(outputPath);

    const outputFilename =
      path.parse(originalFilename).name.replace(/[^a-zA-Z0-9-_ ]/g, "_") +
      spec.outputExtension;

    return {
      buffer: outputBuffer,
      filename: outputFilename,
      contentType: spec.outputContentType,
    };
  } catch (err) {
    if (err instanceof ConversionError) throw err;
    throw new ConversionError(
      `Conversion failed: ${err instanceof Error ? err.message : String(err)}`,
      500,
    );
  } finally {
    await rm(workDir, { recursive: true, force: true }).catch(() => {});
  }
}

function toUnixPath(p: string): string {
  return p.replace(/\\/g, "/");
}

function runSoffice(args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    execFile(
      SOFFICE_BINARY,
      args,
      { timeout: CONVERSION_TIMEOUT_MS },
      (error, _stdout, stderr) => {
        if (error) {
          reject(new ConversionError(`LibreOffice error: ${stderr || error.message}`, 500));
          return;
        }
        resolve();
      },
    );
  });
}
