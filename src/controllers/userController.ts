import * as express from "express";
import * as bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import jwt = require('jsonwebtoken');


// create and setup express app
const app = express()
app.use(express.json())


export const signUp = async function (req: Request, res: Response) {
    const hash = bcrypt.hashSync(req.body.password, 10)
    const user = AppDataSource.getRepository(User).create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        contact: req.body.contact,
        adresse: req.body.adresse,
        photo:req.body.photo, 
        password: hash
    })
    const newUser = await AppDataSource.getRepository(User).save(user)
    return res.send('Utilisateur crée !')
}



export const login = async function (req: Request, res: Response) {
    await AppDataSource.getRepository(User).findOneBy({
        email: req.body.email,
    })
       .then(user => {
           if (!user) {
               return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
           }
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                   }
                   res.status(200).json({
                       userId: user.id,
                       token: jwt.sign(
                        { userId: user.id },
                        'foo',
                        { expiresIn: '2h' }
                    )
                   });
               })
               .catch(error => res.status(500).json({ error }));
       })
       .catch(error => res.status(500).json({ error }));
};



export const editLogin = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).findOneBy({
        id: +req.params.id,
    })
    AppDataSource.getRepository(User).update(user, req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)       
};


export const getUsers = async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(User).find({
        relations: {
            profil: true,
        },
    })
    res.json(users)
};


export const getOneUser = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).findOne({
        where: {
            id: +req.params.id,
        },
        relations: {
            profil: true
        }
    })
    return res.send(user)
}

export const deleteUser = async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
}