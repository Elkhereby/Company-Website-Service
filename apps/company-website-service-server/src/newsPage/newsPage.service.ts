import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsPageServiceBase } from "./base/newsPage.service.base";

@Injectable()
export class NewsPageService extends NewsPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
