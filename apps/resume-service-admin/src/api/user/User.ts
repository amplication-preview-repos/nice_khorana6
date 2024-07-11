import { JsonValue } from "type-fest";
import { ResumeSection } from "../resumeSection/ResumeSection";
import { DashboardSettings } from "../dashboardSettings/DashboardSettings";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  resumeSections?: Array<ResumeSection>;
  dashboardSettingsItems?: Array<DashboardSettings>;
};
