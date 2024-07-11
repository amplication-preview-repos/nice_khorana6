import { DashboardSettings as TDashboardSettings } from "../api/dashboardSettings/DashboardSettings";

export const DASHBOARDSETTINGS_TITLE_FIELD = "theme";

export const DashboardSettingsTitle = (record: TDashboardSettings): string => {
  return record.theme?.toString() || String(record.id);
};
