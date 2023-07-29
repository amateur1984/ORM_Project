import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm"

import { User } from "./User"

@Entity()
export class Profil {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    description: string

    @OneToMany(() => User, (user) => user.profil) // note: we will create author property in the Photo class below
    users: User[]
}