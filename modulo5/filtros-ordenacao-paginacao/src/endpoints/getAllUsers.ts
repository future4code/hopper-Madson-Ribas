import { Request, Response } from "express"
import connection from "../database/connection"
import selectAllUsers from "./selectAllUsers"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const users = await selectAllUsers()

        let nome = req.query.nome as string
        let order = req.query.order as string
        let sort = req.query.sort as string
        let limit = Number(req.query.limit)
        let page = Number(req.query.page)

        if (!nome) {
            nome = "%"
        }
        if (!sort) {
        sort = "email"
        }

        if (sort !== "name" && sort !== "type") {
        sort = "email"
        }

        if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
        order = "ASC"
        }

        if (isNaN(limit) || limit < 1) {
            limit = 5
        }

        if (isNaN(page) || page < 1) {
            page = 1
        }
   
        let offset = limit * (page - 1)

        const result = await connection("aula48_exercicio")
        .where("name", "like", `%${nome}%`)
        .orderBy(sort, order)
        .limit(limit)
        .offset(offset)
 
        if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
        }

       res.status(200).send(result)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }