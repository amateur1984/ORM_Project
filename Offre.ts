import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Centre } from "./Centre"
import { Compagnie } from "./Compagnie"
import { User } from "./User"

@Entity()
export class Offre {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre_jour: number

    @Column()
    detail: string

    @ManyToMany(() => Centre, (centre) => centre.offres)
    @JoinTable()
    centres: Centre[]

    @ManyToMany(() => Compagnie, (compagnie) => compagnie.offres)
    @JoinTable()
    compagnies: Compagnie[]

    @ManyToMany(() => User, (user) => user.offres)
    @JoinTable()
    users: User[]



}
