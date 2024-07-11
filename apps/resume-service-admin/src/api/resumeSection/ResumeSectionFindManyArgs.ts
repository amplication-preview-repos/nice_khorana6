import { ResumeSectionWhereInput } from "./ResumeSectionWhereInput";
import { ResumeSectionOrderByInput } from "./ResumeSectionOrderByInput";

export type ResumeSectionFindManyArgs = {
  where?: ResumeSectionWhereInput;
  orderBy?: Array<ResumeSectionOrderByInput>;
  skip?: number;
  take?: number;
};
