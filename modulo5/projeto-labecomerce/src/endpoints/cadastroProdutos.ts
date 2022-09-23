import { Request, Response } from "express"
import connection from "../database/connection"


export const cadastroProdutos = async(req: Request,res: Response): Promise<void> => {
    const errorCode = 400
    try {
        const {name, price, image_url} = req.body
        const id = Date.now()

        const result = await connection.raw(`
            INSERT INTO labecommerce_products
            VALUES ("${id}", "${name}", "${price}", "${image_url}")
        `)

        res.status(200).send("Produto adicionado!")
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}