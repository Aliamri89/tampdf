import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "contact-us",
  "/contact",
  (dict) => dict.staticPages.contactUs,
);

export { generateMetadata };
export default Page;
