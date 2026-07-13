import type { ToolCategoryId } from "../types";

export const categoriesAr: Record<ToolCategoryId, { name: string; description: string }> = {
  pdf: {
    name: "أدوات PDF",
    description: "ادمج ملفات PDF أو قسّمها أو اضغطها في ثوانٍ.",
  },
  image: {
    name: "أدوات الصور",
    description: "اضغط الصور وحوّلها دون فقدان الجودة.",
  },
};
