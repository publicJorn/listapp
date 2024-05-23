import classNames from 'classnames'
import type { IList } from 'dto'
import { Header } from '@/app/_components/header/Header'
import { getLists } from '../actions'
import { Items } from '../_components/items/Items'
import { Lists } from '../_components/lists/Lists'
import { ListActions } from '../_components/listActions/ListActions'

import baseStyle from '@/app/base.module.css'
import style from './page.module.css'
import { redirect } from 'next/navigation'

type ListProps = {
  params: {
    id: number
  }
}

export default async function List({ params }: ListProps) {
  const id = Number(params.id)

  if (isNaN(id)) {
    redirect('/list')
  }

  const lists = await getLists()

  let currentList: IList | undefined = undefined

  if (id) {
    currentList = lists.find((list) => list.id === id)
  }

  return (
    <div className={classNames(baseStyle.container, style.listView)}>
      <Header title={currentList?.title || 'Welcome to ListApp!'} />
      <main className={style.main}>
        {currentList ? (
          <Items listId={currentList.id} />
        ) : (
          <p className={style.watermark}>Add a list to get started!</p>
        )}
      </main>
      <Lists lists={lists} activeId={id} />
      <ListActions listId={id} />
    </div>
  )
}
