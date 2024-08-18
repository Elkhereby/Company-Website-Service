import { AboutUsPage as TAboutUsPage } from "../api/aboutUsPage/AboutUsPage";

export const ABOUTUSPAGE_TITLE_FIELD = "id";

export const AboutUsPageTitle = (record: TAboutUsPage): string => {
  return record.id?.toString() || String(record.id);
};
