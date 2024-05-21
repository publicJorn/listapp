import type { IItem } from 'dto'
import { Item } from './Item'

import style from './Items.module.css'

export type ItemsProps = {
  items: IItem[]
}

export function Items({ items }: ItemsProps) {
  return (
    <ul className={style.items}>
      {items.map((item) => (
        <Item as="li" key={item.id} item={item} />
      ))}
    </ul>
  )
}
