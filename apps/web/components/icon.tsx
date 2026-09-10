import {
  ArrowUpDown,
  Combine,
  Crop,
  FileImage,
  FileText,
  Image,
  ImageDown,
  ImagePlus,
  Images,
  Minimize2,
  RotateCw,
  Scaling,
  Scissors,
  Trash2,
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
  Scissors,
  Trash2,
  ArrowUpDown,
  Crop,
  Scaling,
  Images,
};

export function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const LucideIconComponent = icons[name] ?? FileText;
  return <LucideIconComponent {...props} />;
}
