import type { IItem } from 'dto'
import style from './Items.module.css'

export type ItemsProps = {
  items: IItem[]
}

export function Items({ items }: ItemsProps) {
  return (
    <ul className={style.items}>
      {items.map((item) => (
        <li key={item.id} className={style.item}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
