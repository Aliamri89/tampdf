import { AdsDisclosure } from "@/components/ads/ads-disclosure";
import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage(
  "cookie-policy",
  "/cookie-policy",
  (dict) => dict.staticPages.cookiePolicy,
  (_locale, dict) => <AdsDisclosure dict={dict} />,
  { builtIn: true },
);

export { generateMetadata };
export default Page;
