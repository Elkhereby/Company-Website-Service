import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExternalLinkPageWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
