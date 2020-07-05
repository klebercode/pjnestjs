import { Field, InputType, GraphQLISODateTime } from '@nestjs/graphql';
import { IsOptional, IsEmail, MaxLength } from 'class-validator';

@InputType()
export class CreateResponsibleInput {
  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  name: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  dateBirth: Date;

  @Field({ nullable: true })
  @MaxLength(1)
  @IsOptional()
  gender?: string;

  @Field({ nullable: true })
  @MaxLength(1)
  @IsOptional()
  codeNationality?: string;

  @Field({ nullable: true })
  @MaxLength(30)
  @IsOptional()
  nationality?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  adress?: string;

  @Field({ nullable: true })
  @MaxLength(60)
  @IsOptional()
  district?: string;

  @Field({ nullable: true })
  @MaxLength(60)
  @IsOptional()
  complement?: string;

  @Field({ nullable: true })
  @IsOptional()
  stateId?: number;

  @Field({ nullable: true })
  @IsOptional()
  cityId?: number;

  // campo CEP
  @Field({ nullable: true })
  @MaxLength(10)
  @IsOptional()
  zipCode?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @MaxLength(14)
  @IsOptional()
  phone?: string;

  @Field({ nullable: true })
  @MaxLength(15)
  @IsOptional()
  cellphone?: string;

  @Field({ nullable: true })
  @MaxLength(15)
  @IsOptional()
  whatsapp?: string;

  @Field({ nullable: true })
  @MaxLength(14)
  @IsOptional()
  cpf?: string;

  @Field({ nullable: true })
  @MaxLength(15)
  @IsOptional()
  identity?: string;

  @Field({ nullable: true })
  @MaxLength(15)
  @IsOptional()
  OrgIdentity?: string;

  @Field({ nullable: true })
  @IsOptional()
  civilStatus?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  note?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  profession?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  workCompany?: string;

  @Field({ nullable: true })
  @MaxLength(14)
  @IsOptional()
  workPhone?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  @IsOptional()
  profile?: string;
}