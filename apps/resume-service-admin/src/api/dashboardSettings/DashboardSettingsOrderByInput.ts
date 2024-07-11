import { SortOrder } from "../../util/SortOrder";

export type DashboardSettingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  theme?: SortOrder;
  layout?: SortOrder;
  userId?: SortOrder;
};
