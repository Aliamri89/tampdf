import { AllToolsDirectory } from "@/components/all-tools-directory";
import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "about-us",
  "/about",
  (dict) => dict.staticPages.aboutUs,
  (locale, dict) => <AllToolsDirectory locale={locale} heading={dict.staticPages.aboutUs.toolsHeading} />,
);

export { generateMetadata };
export default Page;
