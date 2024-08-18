import { NewsPageWhereInput } from "./NewsPageWhereInput";
import { NewsPageOrderByInput } from "./NewsPageOrderByInput";

export type NewsPageFindManyArgs = {
  where?: NewsPageWhereInput;
  orderBy?: Array<NewsPageOrderByInput>;
  skip?: number;
  take?: number;
};
