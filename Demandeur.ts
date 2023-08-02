import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Demande } from "./Demande"
import { User } from "./User"
import { Session } from "./Session"
import { Participant } from "./Participant"
import { Bourse } from "./Bourse"

@Entity()
export class Demandeur {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => Demande, (demande) => demande.demandeurs)
    @JoinTable()
    demandes: Demande[]

    @OneToOne(() => User, (user) => user.demandeur)
    @JoinColumn()
    user: User

    @ManyToMany(() => Session, (session) => session.demandeurs)
    @JoinTable()
    sessions: Session[]

    @OneToOne(() => Participant, (participant) => participant.demandeur)
    participant: Participant

    @OneToMany(() => Bourse, (bourse) => bourse.demandeur) // note: we will create author property in the Photo class below
    bourses: Bourse[]


}
