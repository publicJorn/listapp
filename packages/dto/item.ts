import { z } from 'zod'

export const itemSchema = z.object({
  id: z.number().positive(),
  listId: z.number().positive(),
  title: z.string().trim(),
  description: z.string().trim().optional(),
  checked: z.boolean().default(false),
})

export type IItem = z.infer<typeof itemSchema>

export const itemCreateDtoSchema = itemSchema.omit({ id: true })

export type ItemCreateDto = z.infer<typeof itemCreateDtoSchema>

export const itemUpdateDtoSchema = itemCreateDtoSchema.omit({ listId: true }).partial()

export type ItemUpdateDto = z.infer<typeof itemUpdateDtoSchema>
