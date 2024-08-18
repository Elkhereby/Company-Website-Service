import * as graphql from "@nestjs/graphql";
import { NewsPageResolverBase } from "./base/newsPage.resolver.base";
import { NewsPage } from "./base/NewsPage";
import { NewsPageService } from "./newsPage.service";

@graphql.Resolver(() => NewsPage)
export class NewsPageResolver extends NewsPageResolverBase {
  constructor(protected readonly service: NewsPageService) {
    super(service);
  }
}
