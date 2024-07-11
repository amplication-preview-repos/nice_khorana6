import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResumeSectionWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  order?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
