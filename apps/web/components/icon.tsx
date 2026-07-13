import {
  Combine,
  FileImage,
  FileText,
  Image,
  ImageDown,
  ImagePlus,
  Minimize2,
  RotateCw,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  FileText,
  Image,
  Combine,
  Minimize2,
  ImageDown,
  ImagePlus,
  FileImage,
  RotateCw,
};

export function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const LucideIconComponent = icons[name] ?? FileText;
  return <LucideIconComponent {...props} />;
}
