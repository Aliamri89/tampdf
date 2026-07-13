import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "cookie-policy",
  "/cookie-policy",
  (dict) => dict.staticPages.cookiePolicy,
);

export { generateMetadata };
export default Page;
