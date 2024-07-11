import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardSettingsUpdateInput = {
  theme?: string | null;
  layout?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
