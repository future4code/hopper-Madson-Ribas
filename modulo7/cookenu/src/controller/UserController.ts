import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO, UserProfileInputDTO } from "../model/user";

export class UserController {
  constructor(private readonly userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
      };

      const token = await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const token = await this.userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public userProfile = async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers
      const { email } = req.body

      const input: UserProfileInputDTO = {
        email, 
        token: authorization as string
      }

      console.log(req.headers);
      

      const profileInfo = await this.userBusiness.userProfile(input)

      res.status(200).send(profileInfo)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
