/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AboutUsPageWhereInput } from "./AboutUsPageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AboutUsPageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AboutUsPageWhereInput,
  })
  @ValidateNested()
  @Type(() => AboutUsPageWhereInput)
  @IsOptional()
  @Field(() => AboutUsPageWhereInput, {
    nullable: true,
  })
  every?: AboutUsPageWhereInput;

  @ApiProperty({
    required: false,
    type: () => AboutUsPageWhereInput,
  })
  @ValidateNested()
  @Type(() => AboutUsPageWhereInput)
  @IsOptional()
  @Field(() => AboutUsPageWhereInput, {
    nullable: true,
  })
  some?: AboutUsPageWhereInput;

  @ApiProperty({
    required: false,
    type: () => AboutUsPageWhereInput,
  })
  @ValidateNested()
  @Type(() => AboutUsPageWhereInput)
  @IsOptional()
  @Field(() => AboutUsPageWhereInput, {
    nullable: true,
  })
  none?: AboutUsPageWhereInput;
}
export { AboutUsPageListRelationFilter as AboutUsPageListRelationFilter };
