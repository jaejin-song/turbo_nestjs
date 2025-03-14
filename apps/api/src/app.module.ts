import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { ListModule } from './list/list.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
