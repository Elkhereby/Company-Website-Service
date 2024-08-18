import { SortOrder } from "../../util/SortOrder";

export type ContactUsPageOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
