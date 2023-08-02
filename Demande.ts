import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm"
import { Compagnie } from "./Compagnie"
import { Mode } from "./Mode"
import { Theme } from "./Theme"
import { User } from "./User"
import { Validation } from "./Validation"
import { Participant } from  "./Participant"
import { Demandeur } from "./Demandeur"


@Entity()
export class Demande {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    nombre_jour: number

    @Column()
    detail: string

    @ManyToMany(() => Compagnie, (compagnie) => compagnie.demandes)
    @JoinTable()
    compagnies: Compagnie[]

    @ManyToOne(() => Mode, (mode) => mode.demandes)
    mode: Mode

    @ManyToOne(() => Theme, (theme) => theme.demandes)
    theme: Theme

    @ManyToOne(() => User, (user) => user.demandes)
    user: User

    @OneToMany(() => Validation, (validation) => validation.demande) // note: we will create author property in the Photo class below
    validations: Validation[]

    @ManyToMany(() => Demandeur, (demandeur) => demandeur.demandes)
    demandeurs: Demandeur[]




}
