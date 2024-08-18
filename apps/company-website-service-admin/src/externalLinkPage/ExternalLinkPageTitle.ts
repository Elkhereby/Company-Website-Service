import { ExternalLinkPage as TExternalLinkPage } from "../api/externalLinkPage/ExternalLinkPage";

export const EXTERNALLINKPAGE_TITLE_FIELD = "title";

export const ExternalLinkPageTitle = (record: TExternalLinkPage): string => {
  return record.title?.toString() || String(record.id);
};
