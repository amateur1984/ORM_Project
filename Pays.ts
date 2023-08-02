import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, } from "typeorm"
import { Region } from "./Region"
import { Centre } from "./Centre"
import { User } from "./User"

@Entity()
export class Pays {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nom: string

    @Column()
    code_pays: string

    @ManyToOne(() => Region, (region) => region.pays)
    region: Region

    @OneToMany(() => Centre, (centre) => centre.pays) // note: we will create author property in the Photo class below
    centres: Centre[]

    @ManyToOne(() => User, (user) => user.pays)
    user: User



}
