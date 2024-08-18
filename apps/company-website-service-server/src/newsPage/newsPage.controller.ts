import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsPageService } from "./newsPage.service";
import { NewsPageControllerBase } from "./base/newsPage.controller.base";

@swagger.ApiTags("newsPages")
@common.Controller("newsPages")
export class NewsPageController extends NewsPageControllerBase {
  constructor(protected readonly service: NewsPageService) {
    super(service);
  }
}
