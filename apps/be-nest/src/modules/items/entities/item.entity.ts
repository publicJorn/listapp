import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { List } from 'src/modules/lists/entities/list.entity'
import { IItem } from 'dto'

// When splitting item in different types later, make Item the base class and extend:
// https://stackoverflow.com/questions/78353759/create-mapping-table-in-typeorm-where-1-column-can-reference-multiple-tables

@Entity()
export class Item implements IItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => List, (list) => list.items)
  @JoinColumn()
  list: List[]

  @Column({ nullable: false })
  listId: number

  @Column({
    length: 100,
    nullable: false,
  })
  title: string

  @Column('text', { default: '' })
  description: string

  @Column({ default: false })
  checked: boolean
}
