export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
  public id: string,
  public email: string,
  public password: string,
  public name: string,
) {}
  
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface UserProfileInputDTO {
  email: string;
  token: string;
}

export interface EditUserInput {
  name: string;
  id: string;
}

export interface AuthenticationData {
  id: string;
}
