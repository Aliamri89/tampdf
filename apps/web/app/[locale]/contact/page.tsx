import { ContactForm } from "@/components/contact/contact-form";
import { createStaticCmsPage } from "@/lib/cms-static-page-route";
import { getContactFormText } from "@/lib/contact-form-text";

const { generateMetadata, Page } = createStaticCmsPage(
  "contact-us",
  "/contact",
  (dict) => dict.staticPages.contactUs,
  // The form goes after the written contact details (and before a closing section, if any).
  (locale) => (
    <div className="pt-4">
      <ContactForm text={getContactFormText(locale)} locale={locale} />
    </div>
  ),
);

export { generateMetadata };
export default Page;
