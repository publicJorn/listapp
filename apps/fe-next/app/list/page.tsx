import { notFound } from 'next/navigation'
import classNames from 'classnames'
import type { IList, IItem } from 'dto'
import { Header } from '@/app/components/header/Header'
import { getLists, getItems } from '@/app/api'
import { Items } from './Items'
import { Lists } from './Lists'
import { ListActions } from './ListActions'
import baseStyle from '@/app/base.module.css'
import style from './page.module.css'

type ListProps = {
  searchParams: {
    id?: number
  }
}

export default async function List({ searchParams }: ListProps) {
  const id = Number(searchParams.id) || 0

  const lists = await getLists()

  let items: IItem[] = []
  let currentList: IList | undefined = undefined

  if (id) {
    currentList = lists.find((list) => list.id === id)
  }
  if (!currentList && lists.length) {
    currentList = lists[0]
  }

  if (currentList) {
    items = await getItems(currentList.id || 0)
  }

  return (
    <div className={classNames(baseStyle.container, style.listView)}>
      <Header title={currentList?.title} />
      <main className={style.main}>
        {currentList ? (
          <Items items={items} />
        ) : (
          <p className={style.watermark}>Add a list to get started!</p>
        )}
      </main>
      <Lists lists={lists} />
      <ListActions />
    </div>
  )
}
