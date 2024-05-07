import type { IList } from 'dto'
import style from './Lists.module.css'

type ListsProps = {
  lists: IList[]
}

export function Lists({ lists }: ListsProps) {
  return (
    <ul className={style.allLists}>
      {lists.map((list) => (
        <li className={style.aList}>{list.title}</li>
      ))}
      <li className={style.aList}>+ Add list</li>
    </ul>
  )
}
