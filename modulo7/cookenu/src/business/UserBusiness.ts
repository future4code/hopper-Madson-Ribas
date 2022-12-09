import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserAlreadyExists, UserNotFound, Unauthorized } from "../error/customError";
import { UserInputDTO, User, LoginInputDTO, UserProfileInputDTO } from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {
  constructor(
    private readonly idGenerator: IdGeneratorInterface,
    private readonly tokenGenerator: TokenGenerator,
    private readonly hashManager: HashManager,
    private readonly userDatabase: UserDatabase
  ) {}

  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (name.length < 6) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const doesUserExists = await this.userDatabase.findUser(email)

      if(doesUserExists){
        throw new UserAlreadyExists();
      }

      const id: string = this.idGenerator.generateId();

      const hashPassword: string = await this.hashManager.hash(password);

      const user = new User (
        id,
        email,
        hashPassword,
        name
      )

      await this.userDatabase.insertUser(user);
      const token = this.tokenGenerator.generateToken(id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await this.userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await this.hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = this.tokenGenerator.generateToken(user.id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public userProfile = async (input: UserProfileInputDTO) => {
    try {
      const { email, token } = input;

      console.log(token);
      

      if (!token) {
        throw new CustomError(
          400,
          'Preencha o campo "token"'
        );
      }

      const data = this.tokenGenerator.tokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }


      const profileInfo = await this.userDatabase.userProfile(email);

      return profileInfo

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
