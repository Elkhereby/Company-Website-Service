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
import { NewsPage } from "./NewsPage";
import { NewsPageCountArgs } from "./NewsPageCountArgs";
import { NewsPageFindManyArgs } from "./NewsPageFindManyArgs";
import { NewsPageFindUniqueArgs } from "./NewsPageFindUniqueArgs";
import { CreateNewsPageArgs } from "./CreateNewsPageArgs";
import { UpdateNewsPageArgs } from "./UpdateNewsPageArgs";
import { DeleteNewsPageArgs } from "./DeleteNewsPageArgs";
import { NewsPageService } from "../newsPage.service";
@graphql.Resolver(() => NewsPage)
export class NewsPageResolverBase {
  constructor(protected readonly service: NewsPageService) {}

  async _newsPagesMeta(
    @graphql.Args() args: NewsPageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [NewsPage])
  async newsPages(
    @graphql.Args() args: NewsPageFindManyArgs
  ): Promise<NewsPage[]> {
    return this.service.newsPages(args);
  }

  @graphql.Query(() => NewsPage, { nullable: true })
  async newsPage(
    @graphql.Args() args: NewsPageFindUniqueArgs
  ): Promise<NewsPage | null> {
    const result = await this.service.newsPage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NewsPage)
  async createNewsPage(
    @graphql.Args() args: CreateNewsPageArgs
  ): Promise<NewsPage> {
    return await this.service.createNewsPage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => NewsPage)
  async updateNewsPage(
    @graphql.Args() args: UpdateNewsPageArgs
  ): Promise<NewsPage | null> {
    try {
      return await this.service.updateNewsPage({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => NewsPage)
  async deleteNewsPage(
    @graphql.Args() args: DeleteNewsPageArgs
  ): Promise<NewsPage | null> {
    try {
      return await this.service.deleteNewsPage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
