import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreateClassRoomItemInput {
  @Field({ nullable: false })
  @IsOptional()
  classroomId?: number;

  @Field({ nullable: false })
  @IsOptional()
  subjectId?: number;

  @Field({ nullable: false })
  @IsOptional()
  teacherId?: number;

  @Field({ nullable: true })
  @IsOptional()
  workHours?: number;

  @Field({ nullable: true })
  @IsOptional()
  visibleReport?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  visibleMinute?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  registerCall?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  registerContent?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  registerOccurrence?: boolean;

  @Field({ nullable: false })
  @MaxLength(1)
  @IsOptional()
  type?: string;

  @Field({ nullable: true })
  @IsOptional()
  numberGrades?: number;

  @Field({ nullable: true })
  @IsOptional()
  gradeMin?: number;

  @Field({ nullable: true })
  @IsOptional()
  gradeMax?: number;

  @Field({ nullable: true })
  @IsOptional()
  order?: number;
}
