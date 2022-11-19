import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

   public createUser = async ( req: Request, res: Response ) => {
      try {
         const { name, email, password } = req.body

         const user = {
            name,
            email,
            password
         }

         const userBusiness = new UserBusiness()
         await userBusiness.createUser(user)

         res.status(201).send({ message: "Usuário criado!" })
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   public getUsers = async ( req: Request, res: Response ) => {
      try {
         const userBusiness = new UserBusiness()
         const users = await userBusiness.getUsers()

         res.send(users).status(200);
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   public deleteUser = async ( req: Request, res: Response ) => {
      try {
         const input = {
             id: req.params.id
         }

         const userBusiness = new UserBusiness()
         await userBusiness.deleteUser(input)

         res.status(200).send({ message: "Usuário apagado com sucesso" });

     } catch (error:any) {
         res.status(400).send({ error: error.message });
     }
   }
}

