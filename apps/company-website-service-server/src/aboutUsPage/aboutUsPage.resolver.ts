import * as graphql from "@nestjs/graphql";
import { AboutUsPageResolverBase } from "./base/aboutUsPage.resolver.base";
import { AboutUsPage } from "./base/AboutUsPage";
import { AboutUsPageService } from "./aboutUsPage.service";

@graphql.Resolver(() => AboutUsPage)
export class AboutUsPageResolver extends AboutUsPageResolverBase {
  constructor(protected readonly service: AboutUsPageService) {
    super(service);
  }
}
