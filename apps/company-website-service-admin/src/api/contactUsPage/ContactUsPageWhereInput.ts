import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactUsPageWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
