import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ListsService } from './lists.service'
import { listDtoSchema, ListDto } from 'dto'
import { ZodValidationPipe } from 'src/common/pipes/ZodValidation.pipe'

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
  @UsePipes(new ZodValidationPipe(listDtoSchema))
  create(@Body() createListDto: ListDto) {
    return this.listsService.create(createListDto)
  }

  @Put(':id')
  // @UsePipes with ZodValidationPipe would also run it for @Param, which is not what we want
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(listDtoSchema)) updateListDto: ListDto,
  ) {
    return this.listsService.update(id, updateListDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.remove(id)
  }
}
