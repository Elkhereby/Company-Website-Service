/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, HomePage as PrismaHomePage } from "@prisma/client";

export class HomePageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HomePageCountArgs, "select">): Promise<number> {
    return this.prisma.homePage.count(args);
  }

  async homePages(
    args: Prisma.HomePageFindManyArgs
  ): Promise<PrismaHomePage[]> {
    return this.prisma.homePage.findMany(args);
  }
  async homePage(
    args: Prisma.HomePageFindUniqueArgs
  ): Promise<PrismaHomePage | null> {
    return this.prisma.homePage.findUnique(args);
  }
  async createHomePage(
    args: Prisma.HomePageCreateArgs
  ): Promise<PrismaHomePage> {
    return this.prisma.homePage.create(args);
  }
  async updateHomePage(
    args: Prisma.HomePageUpdateArgs
  ): Promise<PrismaHomePage> {
    return this.prisma.homePage.update(args);
  }
  async deleteHomePage(
    args: Prisma.HomePageDeleteArgs
  ): Promise<PrismaHomePage> {
    return this.prisma.homePage.delete(args);
  }
}
