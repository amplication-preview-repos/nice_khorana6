import { Module } from "@nestjs/common";
import { ResumeSectionModuleBase } from "./base/resumeSection.module.base";
import { ResumeSectionService } from "./resumeSection.service";
import { ResumeSectionController } from "./resumeSection.controller";
import { ResumeSectionResolver } from "./resumeSection.resolver";

@Module({
  imports: [ResumeSectionModuleBase],
  controllers: [ResumeSectionController],
  providers: [ResumeSectionService, ResumeSectionResolver],
  exports: [ResumeSectionService],
})
export class ResumeSectionModule {}
