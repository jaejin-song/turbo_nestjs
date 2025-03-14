import { Inject, Injectable } from '@nestjs/common';
import { DrizzleClient } from 'src/database/database.module';
import { usersTable } from 'src/database/schema/users';

@Injectable()
export class ListRepository {
  constructor(@Inject('DATABASE') private readonly db: typeof DrizzleClient) {}

  async getList() {
    return await this.db.select().from(usersTable);
  }
}
