import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AboutUsPageWhereInput = {
  goals?: StringNullableFilter;
  id?: StringFilter;
  mission?: StringNullableFilter;
  vision?: StringNullableFilter;
};
