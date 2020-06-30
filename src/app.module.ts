import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { FileUploadModule } from './fileUpload/fileUpload.module';
import { StudentsModule } from './students/students.module';
import { UserPermissionsModule } from './userpermissions/userpermissions.module';
import { CompaniesModule } from './companies/companies.module';
import { YearsModule } from './years/years.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassRoomsModule } from './classrooms/classrooms.module';

// Modulos Publicos
import { PermisisonsModule } from './permissions/permissions.module';
import { PermissionEntity } from './permissions/entities/permission.object';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationEntity } from './organizations/entities/organization.object';
import { StatesModule } from './states/states.module';
import { StateEntity } from './states/entities/state.object';
import { CitiesModule } from './cities/cities.module';
import { CityEntity } from './cities/entities/city.object';

// Schema do postgres
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.object';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ...config,
        name: 'public',
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        port: configService.get<number>('DB_PORT'),
        host: configService.get<string>('DB_HOST'),
        database: configService.get<any>('DB_NAME'),
        entities: [
          Customer,
          StateEntity,
          OrganizationEntity,
          PermissionEntity,
          CityEntity,
        ],
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
    StatesModule,
    CustomersModule,
    UsersModule,
    StudentsModule,
    FileUploadModule,
    OrganizationsModule,
    PermisisonsModule,
    CitiesModule,
    UserPermissionsModule,
    CompaniesModule,
    YearsModule,
    SubjectsModule,
    TeachersModule,
    ClassRoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
