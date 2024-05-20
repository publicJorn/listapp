import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'
import { fromError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // Make sure it only runs for the @Body argument type (not @Query or @Param)
      // This would not be needed when using only in @Body(), but it does make this pipe more robust
      if (metadata.type !== 'body') return value
      return this.schema.parse(value)
    } catch (zodError) {
      const niceError = fromError(zodError)
      throw new BadRequestException(niceError.message)
    }
  }
}
