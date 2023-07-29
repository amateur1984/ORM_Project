import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Demande } from "./Demande"
import { Session } from "./Session"


export enum ValidStatut {
    ACCORDE = "Accordé",
    REFUSE = "Refusé",
    ATTENTE = "En attente",
}

export enum SubvenStatut {
    ACCORDE = "Accordé",
    REFUSE = "Refusé",
}





@Entity()
export class Validation {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: ValidStatut,
        default: ValidStatut.REFUSE,
    })
    statut: ValidStatut

    @Column({
        type: "enum",
        enum: SubvenStatut,
        default: SubvenStatut.REFUSE,
    })
    subvention: SubvenStatut

    @Column("text")
    description: string

    @ManyToOne(() => Demande, (demande) => demande.validations)
    demande: Demande

    @OneToMany(() => Session, (session) => session.validation) // note: we will create author property in the Photo class below
    sessions: Session[]

}
