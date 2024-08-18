import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactUsPageService } from "./contactUsPage.service";
import { ContactUsPageControllerBase } from "./base/contactUsPage.controller.base";

@swagger.ApiTags("contactUsPages")
@common.Controller("contactUsPages")
export class ContactUsPageController extends ContactUsPageControllerBase {
  constructor(protected readonly service: ContactUsPageService) {
    super(service);
  }
}
