import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Demandeur } from "./Demandeur"


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

}
