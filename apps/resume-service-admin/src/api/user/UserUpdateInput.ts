import { InputJsonValue } from "../../types";
import { ResumeSectionUpdateManyWithoutUsersInput } from "./ResumeSectionUpdateManyWithoutUsersInput";
import { DashboardSettingsUpdateManyWithoutUsersInput } from "./DashboardSettingsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  resumeSections?: ResumeSectionUpdateManyWithoutUsersInput;
  dashboardSettingsItems?: DashboardSettingsUpdateManyWithoutUsersInput;
};
