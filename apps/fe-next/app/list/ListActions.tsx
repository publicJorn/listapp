'use client'

import style from './ListActions.module.css'

export function ListActions() {
  const handleClick = () => {
    console.log('should add item')
  }

  return (
    <section className={style.wrapper}>
      <button onClick={handleClick} disabled>
        Add item
      </button>
    </section>
  )
}
