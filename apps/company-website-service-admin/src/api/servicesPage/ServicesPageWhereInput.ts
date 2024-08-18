import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServicesPageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
