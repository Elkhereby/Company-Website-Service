import { SortOrder } from "../../util/SortOrder";

export type NewsPageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  datePublished?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
