import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, OneToOne, BeforeInsert } from "typeorm"
import { Profil } from "./Profil"
import { Offre } from "./Offre"
import { Demande } from "./Demande"
import { Session } from "./Session"
import { Participant } from "./Participant"
import { Demandeur } from "./Demandeur"
import * as bcrypt from 'bcrypt';



@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    prenom: string

    @Column({unique : true})
    email: string

    @Column()
    contact: string

    @Column()
    adresse: string

    @Column()
    password: string

    @Column({
        default: 'default.jpg',
      })
      photo: string;
      


    @ManyToOne(() => Profil, (profil) => profil.users)
    profil: Profil

    @ManyToMany(() => Offre, (offre) => offre.users)
    offres: Offre[]

    @OneToMany(() => Demande, (demande) => demande.user) // note: we will create author property in the Photo class below
    demandes: Demande[]

    @OneToMany(() => Session, (session) => session.user) // note: we will create author property in the Photo class below
    sessions: Session[]

    @OneToOne(() => Demandeur, (demandeur) => demandeur.user)
    demandeur: Demandeur

    @ManyToMany(() => Participant, (participant) => participant.users)
    participants: Participant[]




}
