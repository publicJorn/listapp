import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateItemDto, UpdateItemDto } from './dto/item.dto'
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

  async create(createItemDto: CreateItemDto) {
    const item = new Item()
    item.title = createItemDto.title.trim()

    await this.itemRepo.save(item)
    return 'Item created'
  }

  async update(id: number, itemDto: UpdateItemDto) {
    itemDto.title = itemDto.title.trim()

    const item = await this.itemRepo.findOneBy({ id })

    if (!item) {
      throw new NotFoundException(`Item ${id} not found`)
    }

    await this.itemRepo.save({ ...item, ...itemDto })
    return `Item ${id} updated`
  }

  async remove(id: number) {
    const report = await this.itemRepo.delete(id)

    if (!report.affected) {
      throw new NotFoundException(`Item ${id} not found`)
    }

    return `Item ${id} removed`
  }
}
