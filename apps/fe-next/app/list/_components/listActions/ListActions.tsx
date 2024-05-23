'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { AddItemForm } from '../addItemForm/AddItemForm'

import 'react-modern-drawer/dist/index.css'
import style from './ListActions.module.css'

// Not a very good lib, but I was lazy
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false })

type Props = {
  listId: number
}

export function ListActions({ listId }: Props) {
  const [showAddItem, setShowAddItem] = useState(false)

  const handleClick = () => {
    setShowAddItem(true)
  }

  const handleSubmit = () => {
    setShowAddItem(false)
  }

  return (
    <section className={style.wrapper}>
      <button onClick={handleClick} disabled={!listId}>
        Add item
      </button>

      {!!listId && (
        <Drawer
          open={showAddItem}
          onClose={() => setShowAddItem(false)}
          direction="bottom"
          size={280}
          className={style.drawer}
        >
          <AddItemForm listId={listId} afterSuccessfulSubmit={handleSubmit} />
        </Drawer>
      )}
    </section>
  )
}
