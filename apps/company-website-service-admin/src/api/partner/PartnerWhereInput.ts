import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PartnerWhereInput = {
  id?: StringFilter;
  logoUrl?: StringNullableFilter;
  name?: StringNullableFilter;
};
