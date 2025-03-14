import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { ListModule } from './list/list.module';
import { DatabaseModule } from './database/database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule, LinksModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
