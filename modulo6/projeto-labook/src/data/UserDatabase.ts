import { UserRepository } from "../business/UserRepository";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USERS } from "./Tabbles";

export class UserDatabase extends BaseDatabase implements UserRepository {
  
   public insertUser = async(
      user: user
   ) => {
      try {
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
         }).into(TABLE_USERS)
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }


}

