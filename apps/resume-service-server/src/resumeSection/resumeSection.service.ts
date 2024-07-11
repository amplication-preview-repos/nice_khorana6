import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResumeSectionServiceBase } from "./base/resumeSection.service.base";

@Injectable()
export class ResumeSectionService extends ResumeSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
