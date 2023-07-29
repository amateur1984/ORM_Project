import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, } from "typeorm"
import { Centre } from "./Centre"
import { Offre } from "./Offre"
import { Demande } from "./Demande"

export enum CompagnieStatut {
    OUI = "Y",
    NON = "N",
}

@Entity()
export class Compagnie {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column({
        type: "enum",
        enum: CompagnieStatut,
        default: CompagnieStatut.NON,
    })
    excellence: CompagnieStatut

    @ManyToMany(() => Centre, (centre) => centre.compagnies)
    @JoinTable()
    centres: Centre[]

    @ManyToMany(() => Offre, (offre) => offre.compagnies)
    offres: Offre[]

    @ManyToMany(() => Demande, (demande) => demande.compagnies)
    demandes: Demande[]

}
