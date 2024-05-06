// Todo: use some way to share the types between BE & FE
export type List = {
  id: number
  title: string
}

export type Item = {
  id: number
  listId: number
  title?: string
  description?: string
  checked: boolean
}
