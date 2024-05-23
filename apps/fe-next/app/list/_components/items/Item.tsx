'use client'

import { useFormStatus } from 'react-dom'
import type { IItem } from 'dto'
import { check } from '@/app/list/actions'

import style from './Items.module.css'

type Props = {
  item: IItem
  as: React.ElementType
}

export const Item = ({ item, as }: Props): JSX.Element => {
  const Component = as

  return (
    <Component className={style.item}>
      <form action={check} className={style.itemForm}>
        <input type="hidden" name="itemId" value={item.id} />
        <input
          type="checkbox"
          className={style.checkbox}
          id={`i${item.id}`}
          name="checked"
          defaultChecked={item.checked}
        />
        <ItemButton item={item} />
      </form>
    </Component>
  )
}

const ItemButton = ({ item }: Omit<Props, 'as'>) => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className={style.button}>
      <label htmlFor={`i${item.id}`} className={style.label}>
        {item.title}
      </label>
    </button>
  )
}
