import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExternalLinkPageServiceBase } from "./base/externalLinkPage.service.base";

@Injectable()
export class ExternalLinkPageService extends ExternalLinkPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
