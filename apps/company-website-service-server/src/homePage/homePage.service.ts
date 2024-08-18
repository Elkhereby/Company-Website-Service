import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomePageServiceBase } from "./base/homePage.service.base";

@Injectable()
export class HomePageService extends HomePageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
