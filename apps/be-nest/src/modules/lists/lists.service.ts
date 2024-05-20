import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ListDto } from 'dto'
import { List } from './entities/list.entity'

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listRepo: Repository<List>,
  ) {}

  async findAll() {
    return await this.listRepo.find()
  }

  async findOne(id: number) {
    const list = await this.listRepo.findOne({ where: { id }, relations: { items: true } })

    if (!list) {
      throw new NotFoundException(`List ${id} not found`)
    }
    return list
  }

  async create(createListDto: ListDto) {
    const list = new List()
    list.title = createListDto.title

    await this.listRepo.save(list)
    return { success: 'List created' }
  }

  async update(id: number, listDto: ListDto) {
    listDto.title = listDto.title

    const list = await this.listRepo.findOneBy({ id })

    if (!list) {
      throw new NotFoundException(`List ${id} not found`)
    }

    await this.listRepo.save({ ...list, ...listDto })
    return { success: `List ${id} updated` }
  }

  async remove(id: number) {
    const report = await this.listRepo.delete(id)

    if (!report.affected) {
      throw new NotFoundException(`List ${id} not found`)
    }

    return { success: `List ${id} removed` }
  }
}
