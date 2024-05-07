// This DTO is currently NOT USED in favour of the `dto` package
// It is still here for future reference
// - Instead of a zod-typed package, I may generate types based on OpenAPI spec later...
import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator'
import { OmitType } from '@nestjs/mapped-types'

export class List {
  @IsNumber()
  @IsPositive()
  id: number

  @IsString()
  @IsNotEmpty()
  title: string
}

export class ListDto extends OmitType(List, ['id'] as const) {}
