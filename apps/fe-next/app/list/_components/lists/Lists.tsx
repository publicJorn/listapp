import Link from 'next/link'
import classNames from 'classnames'
import type { IList } from 'dto'
import style from './Lists.module.css'

type ListsProps = {
  lists: IList[]
  activeId: number
}

export function Lists({ lists, activeId }: ListsProps) {
  return (
    <ul className={style.allLists}>
      {lists.map((list) => (
        <li className={style.aList} key={`list${list.id}`}>
          <Link
            href={`/list/${list.id}`}
            className={classNames(style.listLink, {
              [style.active]: activeId === list.id,
            })}
          >
            {list.title}
          </Link>
        </li>
      ))}
      <li className={style.aList}>+ Add list</li>
    </ul>
  )
}
