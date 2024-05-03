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
