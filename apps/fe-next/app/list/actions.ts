'use server'

import type { IList, IItem, ItemCreateDto } from 'dto'
import { revalidatePath } from 'next/cache'

const API = 'http://localhost:4001'

export async function getLists(): Promise<IList[]> {
  const res = await fetch(`${API}/lists`)

  if (!res.ok) {
    throw new Error('Failed to fetch lists')
  }

  return res.json()
}

export async function getItems(listId: number): Promise<IItem[]> {
  if (listId === 0) return []

  const res = await fetch(`${API}/items?listId=${listId}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch items for list ${listId}`)
  }

  return res.json()
}

export async function addItem(newItem: ItemCreateDto) {
  try {
    const res = await fetch(`${API}/items`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })

    const body = await res.json()

    if (!res.ok) {
      return body.message
    }

    revalidatePath('/list')
    return ''
  } catch (err) {
    console.error(err)
    return `There was an error`
  }
}