import { Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

import { CustomersServiceDecorator } from '../customers/customers-service.decorator';
import { CUSTOMER_CONNECTION } from '../customers/customers.module';
import { ServiceDefault } from '../common/services/schema.service';

import { StudentEntity } from './entities/student.entity';
import { CreateStudentInput } from './types/create-student.input';
import { UpdateStudentInput } from './types/update-student.input';

@CustomersServiceDecorator()
export class StudentsService extends ServiceDefault<
  StudentEntity,
  CreateStudentInput,
  UpdateStudentInput
> {
  constructor(@Inject(CUSTOMER_CONNECTION) connection: Connection) {
    super(connection, StudentEntity);
  }

  async updateToken(
    id: number,
    token: string,
    idUser: number,
  ): Promise<Boolean> {
    await this.repository.update(id, {
      token: token,
      userUpdatedId: idUser,
    });
    return true;
  }
}
