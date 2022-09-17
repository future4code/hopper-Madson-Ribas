import express, { Response, Request} from "express";
import cors from "cors";
import { getAllUsers } from "./endpoints/getAllUsers";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/allUsers", getAllUsers)

app.get("/allUsers/:type", async(req: Request,res: Response): Promise<void> => {
  try {
    let type = req.params.type as string
    const result = await connection("aula48_exercicio")
    .where("type", "like", `%${type}%`)

    res.status(200).send(result)
    
  } catch (error) {
    console.log(error)
       res.send(error.message || error.sqlMessage)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});