import type { IItem } from 'dto'
import { getLists, getItems } from '../../actions'
import { Item } from './Item'

import style from './Items.module.css'

export type ItemsProps = {
  listId: number
}

export async function Items({ listId }: ItemsProps) {
  const items = await getItems(listId)
  return (
    <ul className={style.items}>
      {items.map((item) => (
        <Item as="li" key={item.id} item={item} />
      ))}
    </ul>
  )
}
