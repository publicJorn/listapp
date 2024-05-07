import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // Make sure it only runs for the @Body argument type (not @Query or @Param)
      // This would not be needed when using only in @Body(), but it does make this pipe more robust
      if (metadata.type !== 'body') return value
      const parsedValue = this.schema.parse(value)
      return parsedValue
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
