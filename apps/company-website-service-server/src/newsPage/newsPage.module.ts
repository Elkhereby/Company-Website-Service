import { Module } from "@nestjs/common";
import { NewsPageModuleBase } from "./base/newsPage.module.base";
import { NewsPageService } from "./newsPage.service";
import { NewsPageController } from "./newsPage.controller";
import { NewsPageResolver } from "./newsPage.resolver";

@Module({
  imports: [NewsPageModuleBase],
  controllers: [NewsPageController],
  providers: [NewsPageService, NewsPageResolver],
  exports: [NewsPageService],
})
export class NewsPageModule {}
