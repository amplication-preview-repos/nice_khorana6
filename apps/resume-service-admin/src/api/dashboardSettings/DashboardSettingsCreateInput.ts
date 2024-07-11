import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardSettingsCreateInput = {
  theme?: string | null;
  layout?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
