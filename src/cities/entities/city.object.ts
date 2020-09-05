import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Entity, Column, Unique, JoinColumn, ManyToOne } from 'typeorm';
import { BasicFields } from '../../common/types/basicfields';
import { IsOptional } from 'class-validator';
import { StateEntity } from '../../states/entities/state.object';
import { Paginated } from '../../common/pages';

@ObjectType()
@Entity('city')
@Unique(['description', 'stateId'])
export class CityEntity extends BasicFields {
  @Field({ nullable: true })
  @Column({ length: 100, nullable: false })
  description: string;

  @Field({ nullable: true })
  @Column({ name: 'code_city', length: 7, nullable: false })
  codeCity: string;

  @Field({ nullable: true })
  @Column({ name: 'state_id', nullable: true })
  @IsOptional()
  stateId?: number;

  @Field(type => StateEntity, { nullable: true })
  @JoinColumn({ name: 'state_id' })
  @ManyToOne(type => StateEntity)
  @IsOptional()
  state?: StateEntity;
}

@ObjectType()
export class CityPaginated extends Paginated<CityEntity>(CityEntity) {}
