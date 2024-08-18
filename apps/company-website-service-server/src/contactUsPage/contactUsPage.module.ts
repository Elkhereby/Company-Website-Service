import { Module } from "@nestjs/common";
import { ContactUsPageModuleBase } from "./base/contactUsPage.module.base";
import { ContactUsPageService } from "./contactUsPage.service";
import { ContactUsPageController } from "./contactUsPage.controller";
import { ContactUsPageResolver } from "./contactUsPage.resolver";

@Module({
  imports: [ContactUsPageModuleBase],
  controllers: [ContactUsPageController],
  providers: [ContactUsPageService, ContactUsPageResolver],
  exports: [ContactUsPageService],
})
export class ContactUsPageModule {}
