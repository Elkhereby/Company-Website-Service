import * as graphql from "@nestjs/graphql";
import { ContactUsPageResolverBase } from "./base/contactUsPage.resolver.base";
import { ContactUsPage } from "./base/ContactUsPage";
import { ContactUsPageService } from "./contactUsPage.service";

@graphql.Resolver(() => ContactUsPage)
export class ContactUsPageResolver extends ContactUsPageResolverBase {
  constructor(protected readonly service: ContactUsPageService) {
    super(service);
  }
}
