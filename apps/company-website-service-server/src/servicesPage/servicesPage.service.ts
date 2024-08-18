import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicesPageServiceBase } from "./base/servicesPage.service.base";

@Injectable()
export class ServicesPageService extends ServicesPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
