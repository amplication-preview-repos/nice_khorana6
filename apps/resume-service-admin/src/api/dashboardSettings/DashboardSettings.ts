import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type DashboardSettings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  theme: string | null;
  layout: JsonValue;
  user?: User | null;
};
