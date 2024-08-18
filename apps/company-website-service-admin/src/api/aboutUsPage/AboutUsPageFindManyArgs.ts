import { AboutUsPageWhereInput } from "./AboutUsPageWhereInput";
import { AboutUsPageOrderByInput } from "./AboutUsPageOrderByInput";

export type AboutUsPageFindManyArgs = {
  where?: AboutUsPageWhereInput;
  orderBy?: Array<AboutUsPageOrderByInput>;
  skip?: number;
  take?: number;
};
