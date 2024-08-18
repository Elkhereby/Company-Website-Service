import { ServicesPage as TServicesPage } from "../api/servicesPage/ServicesPage";

export const SERVICESPAGE_TITLE_FIELD = "title";

export const ServicesPageTitle = (record: TServicesPage): string => {
  return record.title?.toString() || String(record.id);
};
