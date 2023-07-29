import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm"

import { Pays } from "./Pays"

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
}

