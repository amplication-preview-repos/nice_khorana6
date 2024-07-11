import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardSettingsWhereInput = {
  id?: StringFilter;
  theme?: StringNullableFilter;
  layout?: JsonFilter;
  user?: UserWhereUniqueInput;
};
