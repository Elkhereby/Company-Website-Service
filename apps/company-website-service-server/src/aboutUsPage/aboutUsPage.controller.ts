import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AboutUsPageService } from "./aboutUsPage.service";
import { AboutUsPageControllerBase } from "./base/aboutUsPage.controller.base";

@swagger.ApiTags("aboutUsPages")
@common.Controller("aboutUsPages")
export class AboutUsPageController extends AboutUsPageControllerBase {
  constructor(protected readonly service: AboutUsPageService) {
    super(service);
  }
}
