/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ResumeSection } from "./ResumeSection";
import { ResumeSectionCountArgs } from "./ResumeSectionCountArgs";
import { ResumeSectionFindManyArgs } from "./ResumeSectionFindManyArgs";
import { ResumeSectionFindUniqueArgs } from "./ResumeSectionFindUniqueArgs";
import { CreateResumeSectionArgs } from "./CreateResumeSectionArgs";
import { UpdateResumeSectionArgs } from "./UpdateResumeSectionArgs";
import { DeleteResumeSectionArgs } from "./DeleteResumeSectionArgs";
import { User } from "../../user/base/User";
import { ResumeSectionService } from "../resumeSection.service";
@graphql.Resolver(() => ResumeSection)
export class ResumeSectionResolverBase {
  constructor(protected readonly service: ResumeSectionService) {}

  async _resumeSectionsMeta(
    @graphql.Args() args: ResumeSectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ResumeSection])
  async resumeSections(
    @graphql.Args() args: ResumeSectionFindManyArgs
  ): Promise<ResumeSection[]> {
    return this.service.resumeSections(args);
  }

  @graphql.Query(() => ResumeSection, { nullable: true })
  async resumeSection(
    @graphql.Args() args: ResumeSectionFindUniqueArgs
  ): Promise<ResumeSection | null> {
    const result = await this.service.resumeSection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ResumeSection)
  async createResumeSection(
    @graphql.Args() args: CreateResumeSectionArgs
  ): Promise<ResumeSection> {
    return await this.service.createResumeSection({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ResumeSection)
  async updateResumeSection(
    @graphql.Args() args: UpdateResumeSectionArgs
  ): Promise<ResumeSection | null> {
    try {
      return await this.service.updateResumeSection({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ResumeSection)
  async deleteResumeSection(
    @graphql.Args() args: DeleteResumeSectionArgs
  ): Promise<ResumeSection | null> {
    try {
      return await this.service.deleteResumeSection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: ResumeSection): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
