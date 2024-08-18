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
import { ServicesPageWhereInput } from "./ServicesPageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ServicesPageOrderByInput } from "./ServicesPageOrderByInput";

@ArgsType()
class ServicesPageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServicesPageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ServicesPageWhereInput, { nullable: true })
  @Type(() => ServicesPageWhereInput)
  where?: ServicesPageWhereInput;

  @ApiProperty({
    required: false,
    type: [ServicesPageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ServicesPageOrderByInput], { nullable: true })
  @Type(() => ServicesPageOrderByInput)
  orderBy?: Array<ServicesPageOrderByInput>;

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

export { ServicesPageFindManyArgs as ServicesPageFindManyArgs };
