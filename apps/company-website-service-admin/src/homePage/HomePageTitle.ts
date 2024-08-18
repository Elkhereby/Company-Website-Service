import { HomePage as THomePage } from "../api/homePage/HomePage";

export const HOMEPAGE_TITLE_FIELD = "title";

export const HomePageTitle = (record: THomePage): string => {
  return record.title?.toString() || String(record.id);
};
