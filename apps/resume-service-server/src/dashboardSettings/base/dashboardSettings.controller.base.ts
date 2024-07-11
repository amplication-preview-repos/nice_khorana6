/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DashboardSettingsService } from "../dashboardSettings.service";
import { DashboardSettingsCreateInput } from "./DashboardSettingsCreateInput";
import { DashboardSettings } from "./DashboardSettings";
import { DashboardSettingsFindManyArgs } from "./DashboardSettingsFindManyArgs";
import { DashboardSettingsWhereUniqueInput } from "./DashboardSettingsWhereUniqueInput";
import { DashboardSettingsUpdateInput } from "./DashboardSettingsUpdateInput";

export class DashboardSettingsControllerBase {
  constructor(protected readonly service: DashboardSettingsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DashboardSettings })
  async createDashboardSettings(
    @common.Body() data: DashboardSettingsCreateInput
  ): Promise<DashboardSettings> {
    return await this.service.createDashboardSettings({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        theme: true,
        layout: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DashboardSettings] })
  @ApiNestedQuery(DashboardSettingsFindManyArgs)
  async dashboardSettingsItems(
    @common.Req() request: Request
  ): Promise<DashboardSettings[]> {
    const args = plainToClass(DashboardSettingsFindManyArgs, request.query);
    return this.service.dashboardSettingsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        theme: true,
        layout: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DashboardSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dashboardSettings(
    @common.Param() params: DashboardSettingsWhereUniqueInput
  ): Promise<DashboardSettings | null> {
    const result = await this.service.dashboardSettings({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        theme: true,
        layout: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DashboardSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDashboardSettings(
    @common.Param() params: DashboardSettingsWhereUniqueInput,
    @common.Body() data: DashboardSettingsUpdateInput
  ): Promise<DashboardSettings | null> {
    try {
      return await this.service.updateDashboardSettings({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          theme: true,
          layout: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DashboardSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDashboardSettings(
    @common.Param() params: DashboardSettingsWhereUniqueInput
  ): Promise<DashboardSettings | null> {
    try {
      return await this.service.deleteDashboardSettings({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          theme: true,
          layout: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
