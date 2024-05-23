import Image from 'next/image'
import style from './header.module.css'

export type HeaderProps = {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={style.header}>
      <Image
        src="https://dummyimage.com/48x48/56CCF2/121212.png&text=LA"
        alt="ListApp"
        width={32}
        height={32}
        className={style.icon}
      />
      {title && <h1 className={style.title}>{title}</h1>}
    </header>
  )
}
