import { z } from 'zod'

export const listSchema = z.object({
  id: z.number().positive(),
  title: z.string().trim().min(1),
})

export type IList = z.infer<typeof listSchema>

export const listDtoSchema = listSchema.omit({ id: true })

export type ListDto = z.infer<typeof listDtoSchema>
