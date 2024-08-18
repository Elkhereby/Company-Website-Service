import { Module } from "@nestjs/common";
import { ServicesPageModuleBase } from "./base/servicesPage.module.base";
import { ServicesPageService } from "./servicesPage.service";
import { ServicesPageController } from "./servicesPage.controller";
import { ServicesPageResolver } from "./servicesPage.resolver";

@Module({
  imports: [ServicesPageModuleBase],
  controllers: [ServicesPageController],
  providers: [ServicesPageService, ServicesPageResolver],
  exports: [ServicesPageService],
})
export class ServicesPageModule {}
