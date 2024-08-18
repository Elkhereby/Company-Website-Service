import * as graphql from "@nestjs/graphql";
import { PartnerResolverBase } from "./base/partner.resolver.base";
import { Partner } from "./base/Partner";
import { PartnerService } from "./partner.service";

@graphql.Resolver(() => Partner)
export class PartnerResolver extends PartnerResolverBase {
  constructor(protected readonly service: PartnerService) {
    super(service);
  }
}
