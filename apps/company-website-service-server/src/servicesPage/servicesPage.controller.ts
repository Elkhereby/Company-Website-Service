import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServicesPageService } from "./servicesPage.service";
import { ServicesPageControllerBase } from "./base/servicesPage.controller.base";

@swagger.ApiTags("servicesPages")
@common.Controller("servicesPages")
export class ServicesPageController extends ServicesPageControllerBase {
  constructor(protected readonly service: ServicesPageService) {
    super(service);
  }
}
