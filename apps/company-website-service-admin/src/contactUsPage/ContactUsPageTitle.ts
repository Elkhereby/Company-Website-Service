import { ContactUsPage as TContactUsPage } from "../api/contactUsPage/ContactUsPage";

export const CONTACTUSPAGE_TITLE_FIELD = "phoneNumber";

export const ContactUsPageTitle = (record: TContactUsPage): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
