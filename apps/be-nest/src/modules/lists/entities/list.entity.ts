import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Item } from '../../items/entities/item.entity'

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Item, (item) => item.list /*, { eager: true }*/)
  items: Item[] // (Todo | OtherItemType)[]

  @Column({
    length: 60,
  })
  title: string
}
