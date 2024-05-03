import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { Item } from './entities/item.entity'
import { ItemsService } from './items.service'
import { ItemsController } from './items.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {
  constructor(private dataSource: DataSource) {}
}
