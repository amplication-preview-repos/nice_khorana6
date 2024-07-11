import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResumeSectionListRelationFilter } from "../resumeSection/ResumeSectionListRelationFilter";
import { DashboardSettingsListRelationFilter } from "../dashboardSettings/DashboardSettingsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  resumeSections?: ResumeSectionListRelationFilter;
  dashboardSettingsItems?: DashboardSettingsListRelationFilter;
};
