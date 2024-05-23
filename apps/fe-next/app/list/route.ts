import { redirect } from 'next/navigation'
import { getLists } from './actions'

export async function GET() {
  const lists = await getLists()
  const id = lists.length ? lists[0].id : 0

  redirect(`/list/${id}`)
}
