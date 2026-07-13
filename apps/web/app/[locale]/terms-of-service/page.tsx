import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "terms-of-service",
  "/terms-of-service",
  (dict) => dict.staticPages.termsOfService,
);

export { generateMetadata };
export default Page;
