import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from "typeorm"
import { Validation } from "./Validation"
import { User } from "./User"
import { Demandeur } from "./Demandeur"
import { Participant } from "./Participant"

export enum ActiveStatut {
    OUI = "Y",
    NON = "N",
}


@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    date_debut: string

    @Column()
    date_fin: string

    @Column({
        type: "enum",
        enum: ActiveStatut,
        default: ActiveStatut.OUI,
    })
    active: ActiveStatut

    @ManyToOne(() => Validation, (validation) => validation.sessions)
    validation: Validation

    @ManyToOne(() => User, (user) => user.sessions)
    user: User

    @ManyToMany(() => Demandeur, (demandeur) => demandeur.sessions)
    demandeurs: Demandeur[]

    @OneToMany(() => Participant, (participant) => participant.session) // note: we will create author property in the Photo class below
    participants: Participant[]

    

}
