import * as graphql from "@nestjs/graphql";
import { HomePageResolverBase } from "./base/homePage.resolver.base";
import { HomePage } from "./base/HomePage";
import { HomePageService } from "./homePage.service";

@graphql.Resolver(() => HomePage)
export class HomePageResolver extends HomePageResolverBase {
  constructor(protected readonly service: HomePageService) {
    super(service);
  }
}
