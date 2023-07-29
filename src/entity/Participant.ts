import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Demande } from "./Demande"
import { User } from "./User"
import { Demandeur } from "./Demandeur"
import { Session } from "./Session"
import { Sondage } from "./Sondage"

@Entity()
export class Participant {

    @PrimaryGeneratedColumn()
    user_id: number

    @OneToOne(() => Demandeur, (demandeur) => demandeur.participant)
    @JoinColumn()
    demandeur: Demandeur

    @ManyToOne(() => Session, (session) => session.participants)
    session: Session

    @ManyToMany(() => User, (user) => user.participants)
    @JoinTable()
    users: User[]

    @OneToMany(() => Sondage, (sondage) => sondage.participant) // note: we will create author property in the Photo class below
    sondages: Sondage[]





}
