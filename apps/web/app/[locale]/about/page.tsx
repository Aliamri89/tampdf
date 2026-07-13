import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "about-us",
  "/about",
  (dict) => dict.staticPages.aboutUs,
);

export { generateMetadata };
export default Page;
