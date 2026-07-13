import { createStaticCmsPage } from "@/lib/cms-static-page-route";

const { generateMetadata, Page } = createStaticCmsPage("faq", "/faq", (dict) => dict.staticPages.faq);

export { generateMetadata };
export default Page;
