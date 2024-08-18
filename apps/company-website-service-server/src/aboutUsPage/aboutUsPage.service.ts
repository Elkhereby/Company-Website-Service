import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AboutUsPageServiceBase } from "./base/aboutUsPage.service.base";

@Injectable()
export class AboutUsPageService extends AboutUsPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
