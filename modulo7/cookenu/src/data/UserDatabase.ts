import { CustomError } from "../error/customError";
import { TABLE_USERS } from "../model/tables";
import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection(TABLE_USERS)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(TABLE_USERS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public userProfile = async (email: string) => {
    try {
      const result = await UserDatabase.connection(TABLE_USERS)
        .select( 'id', 'name', 'password' )
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

}
