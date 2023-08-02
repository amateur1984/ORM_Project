import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, OneToOne } from "typeorm"
import { Profil } from "./Profil"
import { Offre } from "./Offre"
import { Demande } from "./Demande"
import { Session } from "./Session"
import { Participant } from "./Participant"
import { Demandeur } from "./Demandeur"
import { Compagnie } from "./Compagnie"
import { Bourse } from "./Bourse"
import { Centre } from "./Centre"
import { Validation } from "./Validation"
import { Pays } from "./Pays"
import { Region } from "./Region"



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

    
    @OneToMany(() => Compagnie, (compagnie) => compagnie.user) // note: we will create author property in the Photo class below
    compagnies: Compagnie[]

    @OneToMany(() => Bourse, (bourse) => bourse.user) // note: we will create author property in the Photo class below
    bourses: Bourse[]

    @OneToMany(() => Centre, (centre) => centre.user) // note: we will create author property in the Photo class below
    centres: Centre[]

    @OneToMany(() => Validation, (validation) => validation.user) // note: we will create author property in the Photo class below
    validations: Validation[]

    @OneToMany(() => Pays, (pays) => pays.user) // note: we will create author property in the Photo class below
    pays: Pays[]

    @OneToMany(() => Region, (region) => region.user) // note: we will create author property in the Photo class below
    regions: Region[]

 


    




}
