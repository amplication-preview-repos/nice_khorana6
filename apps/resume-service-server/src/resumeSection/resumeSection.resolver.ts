import * as graphql from "@nestjs/graphql";
import { ResumeSectionResolverBase } from "./base/resumeSection.resolver.base";
import { ResumeSection } from "./base/ResumeSection";
import { ResumeSectionService } from "./resumeSection.service";

@graphql.Resolver(() => ResumeSection)
export class ResumeSectionResolver extends ResumeSectionResolverBase {
  constructor(protected readonly service: ResumeSectionService) {
    super(service);
  }
}
