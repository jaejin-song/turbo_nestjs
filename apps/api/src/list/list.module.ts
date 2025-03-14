import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { ListRepository } from './list.repository';
import { DrizzleClient } from 'src/database/database.module';

@Module({
  controllers: [ListController],
  providers: [
    ListService,
    ListRepository,
    {
      provide: 'DATABASE',
      useValue: DrizzleClient,
    },
  ],
})
export class ListModule {}
