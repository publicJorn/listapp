import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { ListsService } from './lists.service'
import { ListDto, CreateListDto } from './dto/list.dto'

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto)
  }

  @Get()
  findAll() {
    return this.listsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateListDto: ListDto) {
    return this.listsService.update(+id, updateListDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.remove(+id)
  }
}
