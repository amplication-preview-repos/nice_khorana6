import { InputJsonValue } from "../../types";
import { ResumeSectionCreateNestedManyWithoutUsersInput } from "./ResumeSectionCreateNestedManyWithoutUsersInput";
import { DashboardSettingsCreateNestedManyWithoutUsersInput } from "./DashboardSettingsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  resumeSections?: ResumeSectionCreateNestedManyWithoutUsersInput;
  dashboardSettingsItems?: DashboardSettingsCreateNestedManyWithoutUsersInput;
};
