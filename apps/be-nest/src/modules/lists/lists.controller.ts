import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { ListsService } from './lists.service'
import { CreateListDto, UpdateListDto } from './dto/list.dto'

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  findAll() {
    return this.listsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.findOne(id)
  }

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(id, updateListDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.remove(id)
  }
}
