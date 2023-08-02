import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Demande } from "./Demande"

@Entity()
export class Theme {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @OneToMany(() => Demande, (demande) => demande.theme) // note: we will create author property in the Photo class below
    demandes: Demande[]

}
