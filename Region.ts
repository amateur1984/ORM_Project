import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    ManyToOne
} from "typeorm"

import { Pays } from "./Pays"
import { User } from "./User"


@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100,
    })
    nom: string

    @OneToMany(() => Pays, (pays) => pays.region) // note: we will create author property in the Photo class below
    pays: Pays[]

    @ManyToOne(() => User, (user) => user.regions)
    user: User
}

