import { Request, Response } from "express"
import connection from "../database/connection"

export const getComprasUsuario = async (req: Request, res: Response) => {
    const errorCode = 400
    const {user_id} = req.params
    try {
        const result = await connection("labecommerce_purchases")
        .where(`user_id`, user_id).select("*")
        
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}