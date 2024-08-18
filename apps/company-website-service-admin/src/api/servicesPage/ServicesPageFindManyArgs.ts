import { ServicesPageWhereInput } from "./ServicesPageWhereInput";
import { ServicesPageOrderByInput } from "./ServicesPageOrderByInput";

export type ServicesPageFindManyArgs = {
  where?: ServicesPageWhereInput;
  orderBy?: Array<ServicesPageOrderByInput>;
  skip?: number;
  take?: number;
};
