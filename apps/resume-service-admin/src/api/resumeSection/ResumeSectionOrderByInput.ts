import { SortOrder } from "../../util/SortOrder";

export type ResumeSectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  order?: SortOrder;
  userId?: SortOrder;
};
