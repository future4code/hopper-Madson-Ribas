import { Request, Response } from "express"
import connection from "../database/connection"


export const cadastroUsuarios = async(req: Request,res: Response): Promise<void> => {
    const errorCode = 400
    try {
        const {name, email, password} = req.body
        const id = Date.now()

        const result = await connection.raw(`
            INSERT INTO labecommerce_users
            VALUES ("${id}", "${name}", "${email}", "${password}")
        `)

        res.status(200).send("Usuario adicionado!")
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}