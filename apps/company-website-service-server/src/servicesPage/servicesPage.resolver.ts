import * as graphql from "@nestjs/graphql";
import { ServicesPageResolverBase } from "./base/servicesPage.resolver.base";
import { ServicesPage } from "./base/ServicesPage";
import { ServicesPageService } from "./servicesPage.service";

@graphql.Resolver(() => ServicesPage)
export class ServicesPageResolver extends ServicesPageResolverBase {
  constructor(protected readonly service: ServicesPageService) {
    super(service);
  }
}
