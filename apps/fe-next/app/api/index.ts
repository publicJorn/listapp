import type { List, Item } from '@/types'

const API = 'http://localhost:4001'

export async function getLists(): Promise<List[]> {
  const res = await fetch(`${API}/lists`)

  if (!res.ok) {
    throw new Error('Failed to fetch lists')
  }

  return res.json()
}

export async function getItems(listId: number): Promise<Item[]> {
  if (listId === 0) return []

  const res = await fetch(`${API}/items?listId=${listId}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch items for list ${listId}`)
  }

  return res.json()
}
