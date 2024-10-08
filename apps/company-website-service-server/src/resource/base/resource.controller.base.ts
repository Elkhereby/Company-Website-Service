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
import { ResourceService } from "../resource.service";
import { ResourceCreateInput } from "./ResourceCreateInput";
import { Resource } from "./Resource";
import { ResourceFindManyArgs } from "./ResourceFindManyArgs";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ResourceUpdateInput } from "./ResourceUpdateInput";

export class ResourceControllerBase {
  constructor(protected readonly service: ResourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resource })
  async createResource(
    @common.Body() data: ResourceCreateInput
  ): Promise<Resource> {
    return await this.service.createResource({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Resource] })
  @ApiNestedQuery(ResourceFindManyArgs)
  async resources(@common.Req() request: Request): Promise<Resource[]> {
    const args = plainToClass(ResourceFindManyArgs, request.query);
    return this.service.resources({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async resource(
    @common.Param() params: ResourceWhereUniqueInput
  ): Promise<Resource | null> {
    const result = await this.service.resource({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateResource(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() data: ResourceUpdateInput
  ): Promise<Resource | null> {
    try {
      return await this.service.updateResource({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          link: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteResource(
    @common.Param() params: ResourceWhereUniqueInput
  ): Promise<Resource | null> {
    try {
      return await this.service.deleteResource({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          link: true,
          title: true,
          updatedAt: true,
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
