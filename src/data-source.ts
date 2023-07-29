import "reflect-metadata"
import { DataSource } from "typeorm"
import { Bourse } from "./entity/Bourse"
import { Centre } from "./entity/Centre"
import { Compagnie } from "./entity/Compagnie"
import { Demande } from "./entity/Demande"
import { Demandeur } from "./entity/Demandeur"
import { Mode } from "./entity/Mode"
import { Theme } from "./entity/Theme"
import { Offre } from "./entity/Offre"
import { Participant } from "./entity/Participant"
import { Pays } from "./entity/Pays"
import { Profil } from "./entity/Profil"
import { Region } from "./entity/Region"
import { Session } from "./entity/Session"
import { Sondage } from "./entity/Sondage"
import { User } from "./entity/User"
import { Validation } from "./entity/Validation"



export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "racee",
    entities: [Bourse, Centre, Compagnie, Demande, Demandeur, Mode,
    Theme, Offre, Participant, Pays, Profil, Region, Session, Sondage, User, Validation],
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
})
