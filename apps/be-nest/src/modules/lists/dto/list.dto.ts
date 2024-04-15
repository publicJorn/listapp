import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator'
import { OmitType } from '@nestjs/mapped-types'

export class ListDto {
  @IsNumber()
  @IsPositive()
  id: number

  @IsString()
  @IsNotEmpty()
  title: string
}

export class CreateListDto extends OmitType(ListDto, ['id'] as const) {}

export class UpdateListDto extends OmitType(ListDto, ['id'] as const) {}
