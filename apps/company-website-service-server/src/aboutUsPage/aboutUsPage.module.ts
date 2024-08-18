import { Module } from "@nestjs/common";
import { AboutUsPageModuleBase } from "./base/aboutUsPage.module.base";
import { AboutUsPageService } from "./aboutUsPage.service";
import { AboutUsPageController } from "./aboutUsPage.controller";
import { AboutUsPageResolver } from "./aboutUsPage.resolver";

@Module({
  imports: [AboutUsPageModuleBase],
  controllers: [AboutUsPageController],
  providers: [AboutUsPageService, AboutUsPageResolver],
  exports: [AboutUsPageService],
})
export class AboutUsPageModule {}
