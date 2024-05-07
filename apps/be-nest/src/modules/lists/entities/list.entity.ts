import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IList as ListType } from 'dto'
import { Item } from '../../items/entities/item.entity'

@Entity()
export class List implements ListType {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Item, (item) => item.list /*, { eager: true }*/)
  items: Item[] // (Todo | OtherItemType)[]

  @Column({
    length: 60,
    nullable: false,
  })
  title: string
}
