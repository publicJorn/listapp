import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ItemCreateDto, ItemUpdateDto } from 'dto'
import { Item } from './entities/item.entity'

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepo: Repository<Item>,
  ) {}

  async findAll() {
    return await this.itemRepo.find()
  }

  async findByListId(listId: number) {
    const items = await this.itemRepo.find({ where: { listId } })
    return items
  }

  async findOne(id: number) {
    const item = await this.itemRepo.findOneBy({ id })

    if (!item) {
      throw new NotFoundException(`Item ${id} not found`)
    }
    return item
  }

  async create(createItemDto: ItemCreateDto) {
    const item = await this.itemRepo.save(createItemDto)
    return item
  }

  async update(id: number, itemDto: ItemUpdateDto) {
    const item = await this.itemRepo.findOneBy({ id })

    if (!item) {
      throw new NotFoundException(`Item ${id} not found`)
    }

    const updatedItem = await this.itemRepo.save({ ...item, ...itemDto })
    return updatedItem
  }

  async remove(id: number) {
    const report = await this.itemRepo.delete(id)

    if (!report.affected) {
      throw new NotFoundException(`Item ${id} not found`)
    }
  }
}
