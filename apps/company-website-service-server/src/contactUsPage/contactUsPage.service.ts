import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactUsPageServiceBase } from "./base/contactUsPage.service.base";

@Injectable()
export class ContactUsPageService extends ContactUsPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
