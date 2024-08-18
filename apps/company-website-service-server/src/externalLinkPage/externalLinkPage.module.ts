import { Module } from "@nestjs/common";
import { ExternalLinkPageModuleBase } from "./base/externalLinkPage.module.base";
import { ExternalLinkPageService } from "./externalLinkPage.service";
import { ExternalLinkPageController } from "./externalLinkPage.controller";
import { ExternalLinkPageResolver } from "./externalLinkPage.resolver";

@Module({
  imports: [ExternalLinkPageModuleBase],
  controllers: [ExternalLinkPageController],
  providers: [ExternalLinkPageService, ExternalLinkPageResolver],
  exports: [ExternalLinkPageService],
})
export class ExternalLinkPageModule {}
