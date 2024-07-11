import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResumeSectionService } from "./resumeSection.service";
import { ResumeSectionControllerBase } from "./base/resumeSection.controller.base";

@swagger.ApiTags("resumeSections")
@common.Controller("resumeSections")
export class ResumeSectionController extends ResumeSectionControllerBase {
  constructor(protected readonly service: ResumeSectionService) {
    super(service);
  }
}
