import { PDFArray, PDFDict, PDFDocument, PDFObject, PDFRef, PDFStream } from "pdf-lib";

/** pdf-lib writes every object it parsed — drop the ones nothing points to anymore. */
export function removeUnreachableObjects(pdfDoc: PDFDocument): void {
  const context = pdfDoc.context;
  const reachable = new Set<string>();
  const stack: PDFObject[] = [];
  const { Root, Info, Encrypt } = context.trailerInfo;
  for (const root of [Root, Info, Encrypt]) if (root) stack.push(root);

  while (stack.length > 0) {
    const value = stack.pop()!;
    if (value instanceof PDFRef) {
      const key = value.toString();
      if (reachable.has(key)) continue;
      reachable.add(key);
      const target = context.lookup(value);
      if (target) stack.push(target);
    } else if (value instanceof PDFDict) {
      for (const [, child] of value.entries()) stack.push(child);
    } else if (value instanceof PDFArray) {
      stack.push(...value.asArray());
    } else if (value instanceof PDFStream) {
      stack.push(value.dict);
    }
  }

  for (const [ref] of context.enumerateIndirectObjects()) {
    if (!reachable.has(ref.toString())) context.delete(ref);
  }
}
