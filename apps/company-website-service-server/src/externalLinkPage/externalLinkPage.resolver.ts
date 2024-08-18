import * as graphql from "@nestjs/graphql";
import { ExternalLinkPageResolverBase } from "./base/externalLinkPage.resolver.base";
import { ExternalLinkPage } from "./base/ExternalLinkPage";
import { ExternalLinkPageService } from "./externalLinkPage.service";

@graphql.Resolver(() => ExternalLinkPage)
export class ExternalLinkPageResolver extends ExternalLinkPageResolverBase {
  constructor(protected readonly service: ExternalLinkPageService) {
    super(service);
  }
}
