import { Injectable, NotFoundException } from '@nestjs/common'
import { ListDto, CreateListDto, UpdateListDto } from './dto/list.dto'

@Injectable()
export class ListsService {
  private readonly lists: ListDto[] = [{ id: 1, title: 'Boodschappen' }]

  create(createListDto: CreateListDto) {
    const highestId = this.lists.reduce(
      (highest, current) => (current.id > highest ? current.id : highest),
      1,
    )

    const list = new ListDto()
    list.id = highestId + 1
    list.title = createListDto.title

    this.lists.push(list)
    return 'List created'
  }

  findAll() {
    return this.lists
  }

  findOne(id: number) {
    const list = this.lists.filter((list) => list.id === id)

    if (!list) {
      throw new NotFoundException(`List ${id} not found`)
    }

    return list
  }

  update(id: number, listDto: UpdateListDto) {
    const idx = this.lists.findIndex((list) => list.id === id)
    const list = this.lists[idx]

    if (!list) {
      throw new NotFoundException(`List ${id} not found`)
    }

    this.lists.splice(idx, 1, { ...list, ...listDto })
    return `List ${id} updated`
  }

  remove(id: number) {
    const idx = this.lists.findIndex((list) => list.id === id)

    if (!idx) {
      throw new NotFoundException(`List ${id} not found`)
    }

    this.lists.splice(idx, 1)
    return `List ${id} removed`
  }
}
