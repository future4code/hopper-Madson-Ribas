import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USERS } from "./tables";

export class UserDatabase extends BaseDatabase {

   public insertUser = async ( user: user ) => {
      try {
         await UserDatabase.connection(TABLE_USERS).insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
         })
      } catch (error: any) {
         throw new Error(error.message)
      }

   }

   public getUsers = async (): Promise<user[]> => {
      try {
         const users: user[] = []
         const result = await UserDatabase.connection(TABLE_USERS).select('*')

         for(let user of result){
            users.push(user);
         }
         
         return users
      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   public deleteUser = async (id: string) => {
      try {
         await UserDatabase.connection(TABLE_USERS).where({id}).delete()
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

}
