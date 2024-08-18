import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
