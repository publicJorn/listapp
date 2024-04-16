import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 60,
  })
  title: string
}
