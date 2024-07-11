import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResumeSectionCreateInput = {
  title?: string | null;
  content?: string | null;
  order?: number | null;
  user?: UserWhereUniqueInput | null;
};
