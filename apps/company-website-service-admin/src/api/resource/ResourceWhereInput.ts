import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResourceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
};
