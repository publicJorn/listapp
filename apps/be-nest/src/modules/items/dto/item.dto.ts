// This DTO is currently NOT USED in favour of the `dto` package
// It is still here for future reference
// - Instead of a zod-typed package, I may generate types based on OpenAPI spec later...
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator'

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  description: string
}

export class UpdateItemDto extends CreateItemDto {
  @IsBoolean()
  checked: boolean
}
