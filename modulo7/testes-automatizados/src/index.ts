import { User } from "./Model/User";

export const isEven = (n: number): boolean => { 
   return n % 2 === 0;
}

export const myAsyncFunc = async ():Promise<string> => {
   return "response";
};

export const login = async (password: string): Promise<any> => {

   if (password !== "senha correta"){
      throw new Error("A senha está incorreta")
   }

   return {
      id: 1,
      name: "teste"
   }

}

export const performPurchase = (user: User, value: number): User | undefined => {
   if(user.balance >= value) {
      return {
         ...user,
         balance: user.balance - value
      }
   }
   return undefined
}