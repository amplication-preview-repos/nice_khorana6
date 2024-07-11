import { User } from "../user/User";

export type ResumeSection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  order: number | null;
  user?: User | null;
};
