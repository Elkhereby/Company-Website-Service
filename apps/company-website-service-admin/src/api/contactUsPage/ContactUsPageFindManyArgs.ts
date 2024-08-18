import { ContactUsPageWhereInput } from "./ContactUsPageWhereInput";
import { ContactUsPageOrderByInput } from "./ContactUsPageOrderByInput";

export type ContactUsPageFindManyArgs = {
  where?: ContactUsPageWhereInput;
  orderBy?: Array<ContactUsPageOrderByInput>;
  skip?: number;
  take?: number;
};
