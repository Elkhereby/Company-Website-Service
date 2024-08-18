import { Module } from "@nestjs/common";
import { HomePageModuleBase } from "./base/homePage.module.base";
import { HomePageService } from "./homePage.service";
import { HomePageController } from "./homePage.controller";
import { HomePageResolver } from "./homePage.resolver";

@Module({
  imports: [HomePageModuleBase],
  controllers: [HomePageController],
  providers: [HomePageService, HomePageResolver],
  exports: [HomePageService],
})
export class HomePageModule {}
