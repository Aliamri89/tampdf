import {
  Combine,
  FileInput,
  FileOutput,
  FileText,
  FileType,
  Image,
  ImageDown,
  ImagePlus,
  Minimize2,
  Scissors,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  FileText,
  Image,
  FileType,
  Combine,
  Scissors,
  Minimize2,
  FileOutput,
  FileInput,
  ImageDown,
  ImagePlus,
};

export function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const LucideIconComponent = icons[name] ?? FileText;
  return <LucideIconComponent {...props} />;
}
