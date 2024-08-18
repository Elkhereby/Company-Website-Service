/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Partner } from "./Partner";
import { PartnerCountArgs } from "./PartnerCountArgs";
import { PartnerFindManyArgs } from "./PartnerFindManyArgs";
import { PartnerFindUniqueArgs } from "./PartnerFindUniqueArgs";
import { CreatePartnerArgs } from "./CreatePartnerArgs";
import { UpdatePartnerArgs } from "./UpdatePartnerArgs";
import { DeletePartnerArgs } from "./DeletePartnerArgs";
import { PartnerService } from "../partner.service";
@graphql.Resolver(() => Partner)
export class PartnerResolverBase {
  constructor(protected readonly service: PartnerService) {}

  async _partnersMeta(
    @graphql.Args() args: PartnerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Partner])
  async partners(
    @graphql.Args() args: PartnerFindManyArgs
  ): Promise<Partner[]> {
    return this.service.partners(args);
  }

  @graphql.Query(() => Partner, { nullable: true })
  async partner(
    @graphql.Args() args: PartnerFindUniqueArgs
  ): Promise<Partner | null> {
    const result = await this.service.partner(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Partner)
  async createPartner(
    @graphql.Args() args: CreatePartnerArgs
  ): Promise<Partner> {
    return await this.service.createPartner({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Partner)
  async updatePartner(
    @graphql.Args() args: UpdatePartnerArgs
  ): Promise<Partner | null> {
    try {
      return await this.service.updatePartner({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Partner)
  async deletePartner(
    @graphql.Args() args: DeletePartnerArgs
  ): Promise<Partner | null> {
    try {
      return await this.service.deletePartner(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
