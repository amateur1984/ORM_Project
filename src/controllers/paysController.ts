import { Request, Response } from "express"
import { Pays } from "../entity/Pays"
import { AppDataSource } from "../data-source";


export const getPays = async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(Pays).find({
        relations: {
            region: true,
        },
    })
    res.json(users)
}

export const getOnePays = async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Pays).findOne({
       where: {
        id: +req.params.id,
       },
       relations: {
        region: true,
    }
    })
    return res.send(results)
}

export const createPays = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(Pays).create(req.body)
    const results = await AppDataSource.getRepository(Pays).save(user)
    return res.send(results)
}

export const modifyPays = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(Pays).findOneBy({
        id: +req.params.id,
    })
    AppDataSource.getRepository(Pays).update(user, req.body)
    const results = await AppDataSource.getRepository(Pays).save(user)
    return res.send(results)
}

export const deletePays = async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Pays).delete(req.params.id)
    return res.send(results)
}