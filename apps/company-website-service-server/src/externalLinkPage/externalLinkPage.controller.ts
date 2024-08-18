import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExternalLinkPageService } from "./externalLinkPage.service";
import { ExternalLinkPageControllerBase } from "./base/externalLinkPage.controller.base";

@swagger.ApiTags("externalLinkPages")
@common.Controller("externalLinkPages")
export class ExternalLinkPageController extends ExternalLinkPageControllerBase {
  constructor(protected readonly service: ExternalLinkPageService) {
    super(service);
  }
}
