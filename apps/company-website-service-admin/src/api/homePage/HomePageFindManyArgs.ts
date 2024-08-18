import { HomePageWhereInput } from "./HomePageWhereInput";
import { HomePageOrderByInput } from "./HomePageOrderByInput";

export type HomePageFindManyArgs = {
  where?: HomePageWhereInput;
  orderBy?: Array<HomePageOrderByInput>;
  skip?: number;
  take?: number;
};
