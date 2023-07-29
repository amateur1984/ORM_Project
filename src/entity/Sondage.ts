import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Participant } from "./Participant"

export enum AviStatut {
    PAS_SATISFAIT = "Pas satisfait",
    SATISFAIT = "Satisfait",
}

export enum AbsenceStatut {
    OUI = "Y",
    NON = "N",
}


@Entity()
export class Sondage {

    @PrimaryGeneratedColumn()
    id: number


    @Column({
        type: "enum",
        enum: AviStatut,
        default: AviStatut.SATISFAIT,
    })
    avis: AviStatut

    @Column({
        type: "enum",
        enum: AbsenceStatut,
        default: AbsenceStatut.NON,
    })
    absent: AbsenceStatut

    @Column()
    raison_absence: string

    @ManyToOne(() => Participant, (participant) => participant.sondages)
    participant: Participant

}
