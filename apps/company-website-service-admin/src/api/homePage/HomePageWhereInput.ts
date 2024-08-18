import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HomePageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
