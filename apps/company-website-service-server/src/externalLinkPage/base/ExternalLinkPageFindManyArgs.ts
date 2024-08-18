/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExternalLinkPageWhereInput } from "./ExternalLinkPageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ExternalLinkPageOrderByInput } from "./ExternalLinkPageOrderByInput";

@ArgsType()
class ExternalLinkPageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExternalLinkPageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ExternalLinkPageWhereInput, { nullable: true })
  @Type(() => ExternalLinkPageWhereInput)
  where?: ExternalLinkPageWhereInput;

  @ApiProperty({
    required: false,
    type: [ExternalLinkPageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ExternalLinkPageOrderByInput], { nullable: true })
  @Type(() => ExternalLinkPageOrderByInput)
  orderBy?: Array<ExternalLinkPageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ExternalLinkPageFindManyArgs as ExternalLinkPageFindManyArgs };
