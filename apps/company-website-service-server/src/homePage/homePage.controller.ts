import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HomePageService } from "./homePage.service";
import { HomePageControllerBase } from "./base/homePage.controller.base";

@swagger.ApiTags("homePages")
@common.Controller("homePages")
export class HomePageController extends HomePageControllerBase {
  constructor(protected readonly service: HomePageService) {
    super(service);
  }
}
