import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Demandeur } from "./Demandeur"
import { User } from "./User"


export enum BourseStatut {
    OUI = "Y",
    NON = "N",
}


@Entity()
export class Bourse {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: BourseStatut,
        default: BourseStatut.NON,
    })
    boursier: BourseStatut

    @ManyToOne(() => Demandeur, (demandeur) => demandeur.bourses)
    demandeur: Demandeur

    
    @ManyToOne(() => User, (user) => user.bourses)
    user: User


}
