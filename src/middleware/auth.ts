const jwt = require('jsonwebtoken')
import { NextFunction, Request, Response } from "express"




export const auth = async function (req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'foo');
        const userId =  decodedToken.userId

        req.body.auth = {
            userId: userId
        };
        
        next()
    } catch(error) {
        res.status(401).send('Merci de vous authentifier !');
    }
}

