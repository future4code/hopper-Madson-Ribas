import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, resp: Response) => {
    resp.status(200).send(users)
})

app.get("/userType", (req: Request, resp: Response) => {

   const {type} = req.body

   if (req.body.type === "NORMAL") {
      let response = users.filter((user) => user.type === "NORMAL")
      resp.status(200).send(response)
   } else if (req.body.type === "ADMIN") {
      let response = users.filter((user) => user.type === "ADMIN")
      resp.status(200).send(response)
   } else {
      resp.status(400).send("Type não encontrado")
   }
   
})

app.get("/userName", (req: Request, resp: Response) => {
   const {name} = req.body
   const nome: string = req.body.name

   const response = users.find(user => user.name.toLowerCase() === nome.toLowerCase())

   if (response !== undefined) {
      resp.status(200).send(response)
   } else {
      resp.status(404).send("Usuário não encontrado")
   }

})

app.put("/criarUsuario", (req: Request, resp: Response) => {
   const {id, name, email, type, age} = req.body
   const usuario = req.body

   if (
      typeof usuario.id === "number" &&
      typeof usuario.name === "string" &&
      typeof usuario.email === "string" &&
      typeof usuario.type === "string" &&
      typeof usuario.age === "number"   ) {
         const response = [...users, usuario ]
         resp.status(201).send("Usuário criado com sucesso!")
      } else {
         resp.status(400).send("Falha ao criar usuário.")
      }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});