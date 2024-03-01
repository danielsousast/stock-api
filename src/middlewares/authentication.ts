import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { Payload } from "../modules/shared/interfaces"

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization

        if (!authToken) {
            return res.status(401).end()
        }

        const [, token] = authToken.split(" ")
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload
        req.user_id = sub

        return next()
    } catch (err) {
        return res.status(401).end()
    }
}