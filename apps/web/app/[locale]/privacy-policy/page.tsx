import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "privacy-policy",
  "/privacy-policy",
  (dict) => dict.staticPages.privacyPolicy,
);

export { generateMetadata };
export default Page;
