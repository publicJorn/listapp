import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common'
import { itemCreateDtoSchema, itemUpdateDtoSchema, ItemCreateDto, ItemUpdateDto } from 'dto'
import { ItemsService } from './items.service'
import { ZodValidationPipe } from 'src/common/pipes/ZodValidation.pipe'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(@Query('listId') listId?: number) {
    if (listId) {
      return this.itemsService.findByListId(listId)
    }
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemsService.findOne(id)
  }

  @Post()
  @UsePipes(new ZodValidationPipe(itemCreateDtoSchema))
  create(@Body() createItemDto: ItemCreateDto) {
    return this.itemsService.create(createItemDto)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    // Here adding pipe only for @Body, where it is needed. This prevents having to
    @Body(new ZodValidationPipe(itemUpdateDtoSchema)) updateItemDto: ItemUpdateDto,
  ) {
    return this.itemsService.update(id, updateItemDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itemsService.remove(id)
  }
}
