import { Injectable } from '@nestjs/common';
import { ListItem } from '@repo/api/list/entities/list.entity';
import { ListRepository } from './list.repository';

@Injectable()
export class ListService {
  constructor(private readonly listRepository: ListRepository) {}

  private readonly _list: ListItem[] = [
    { symbol: 'AAPL', name: 'apple', exchange: 'NASDAQ', assetType: 'Stock' },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp',
      exchange: 'NASDAQ',
      assetType: 'Stock',
    },
  ];

  async getList() {
    return await this.listRepository.getList();
  }
}
