import { Request, Response } from "express"
import connection from "../database/connection"


export const getUsuarios = async(req: Request,res: Response): Promise<void> => {
    const errorCode = 400
    try {
        const result = await connection("labecommerce_users")
        .select("*")

        res.status(200).send(result)
           
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}