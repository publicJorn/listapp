import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

import { List } from './entities/list.entity'
import { Item } from '../items/entities/item.entity'

import { ListsService } from './lists.service'
import { ListsController } from './lists.controller'

@Module({
  imports: [TypeOrmModule.forFeature([List, Item])],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {
  constructor(private dataSource: DataSource) {}
}
