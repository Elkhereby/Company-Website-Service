import { NewsPage as TNewsPage } from "../api/newsPage/NewsPage";

export const NEWSPAGE_TITLE_FIELD = "title";

export const NewsPageTitle = (record: TNewsPage): string => {
  return record.title?.toString() || String(record.id);
};
