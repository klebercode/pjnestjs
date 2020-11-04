import { Test, TestingModule } from '@nestjs/testing';
import { CUSTOMER_CONNECTION } from '../customers/customers.module';

import { StudentOccurrencesService } from './studentinformations.service';
import { UserLogsService } from '../userlogs/userlogs.service';

describe('StudentOccurrencesService', () => {
  let service: StudentOccurrencesService;

  const mockRepository = {
    getRepository: jest.fn(),
    createQueryRunner: jest.fn(),
  };

  const userLogs = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentOccurrencesService,
        {
          provide: CUSTOMER_CONNECTION,
          useValue: mockRepository,
        },
        {
          provide: UserLogsService,
          useValue: userLogs,
        },
      ],
    }).compile();

    service = await module.resolve<StudentOccurrencesService>(
      StudentOccurrencesService,
    );
  });

  afterEach(async () => {
    mockRepository.getRepository.mockReset();
    mockRepository.createQueryRunner.mockReset();
    userLogs.create.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});