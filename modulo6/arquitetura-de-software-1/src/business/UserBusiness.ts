import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
   public createUser = async (user: any) => {
      try {
         const { name, email, password } = user

         if ( !name || !email || !password ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
         }

         if( email.indexOf("@") === -1 ){
            throw new Error("Email invalido");
         }

         if( password.length < 6 ){
            throw new Error("A sua senha de ter no mínimo 6 caracteres");
         }

         const id: string = Date.now().toString()

         const userDatabase = new UserDatabase()

         await userDatabase.insertUser({
            id,
            name,
            email,
            password
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   public getUsers = async () => {
      const userDatabase = new UserDatabase
      return await userDatabase.getUsers()
   }

   public deleteUser = async (input: {id: string}) => {
      if (!input.id) {
      throw new Error("Insira um id")
      }

      const userDatabase = new UserDatabase()
      return await userDatabase.deleteUser(input.id)
   }
}
