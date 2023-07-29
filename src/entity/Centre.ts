import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm"
import { Pays } from "./Pays"
import { Compagnie } from "./Compagnie"
import { Offre } from "./Offre"

@Entity()
export class Centre {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    sigle: string

    @Column()
    adresse: string

    @ManyToOne(() => Pays, (pays) => pays.centres)
    pays: Pays

    @ManyToMany(() => Compagnie, (compagnie) => compagnie.centres)
    compagnies: Compagnie[]

    @ManyToMany(() => Offre, (offre) => offre.centres)
    offres: Offre[]

    

}
