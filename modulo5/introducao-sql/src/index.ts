import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(`
        SELECT * FROM Funcionarios 
        WHERE name LIKE "%${search}%"
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM Funcionarios
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});