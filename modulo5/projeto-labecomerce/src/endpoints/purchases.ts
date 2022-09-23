import { Request, Response } from "express"
import connection from "../database/connection"

export const purchases = async (req: Request,res: Response): Promise<void> => {
    const errorCode = 400
    const {user_id, product_id, quantity} = req.body
    const id = Date.now()
    let product = await connection.raw(`select price from labecommerce_products
        where id = ${product_id}`)
    const total_price = product[0][0].price * quantity


    console.log(product[0][0].price)
    try {
        
        
        await connection.raw(`
            INSERT INTO labecommerce_purchases
            VALUES (${id}, ${user_id}, ${product_id}, ${quantity}, ${Number(total_price)})
        `)

        res.status(200).send("Compra registrada com sucesso!")
    } catch (error: any) {
        
        res.status(errorCode).send(error.message)
        
    }   
}