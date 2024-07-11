import { ResumeSection as TResumeSection } from "../api/resumeSection/ResumeSection";

export const RESUMESECTION_TITLE_FIELD = "title";

export const ResumeSectionTitle = (record: TResumeSection): string => {
  return record.title?.toString() || String(record.id);
};
