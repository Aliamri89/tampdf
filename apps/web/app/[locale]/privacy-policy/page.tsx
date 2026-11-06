import { AdsDisclosure } from "@/components/ads/ads-disclosure";
import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "privacy-policy",
  "/privacy-policy",
  (dict) => dict.staticPages.privacyPolicy,
  (_locale, dict) => <AdsDisclosure dict={dict} />,
);

export { generateMetadata };
export default Page;
