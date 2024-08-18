import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsPageWhereInput = {
  content?: StringNullableFilter;
  datePublished?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
