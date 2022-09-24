import express from "express";
import cors from "cors";
import { cadastroUsuarios } from "./endpoints/cadastroUsuarios";
import { getUsuarios } from "./endpoints/getUsuarios";
import { cadastroProdutos } from "./endpoints/cadastroProdutos";
import { getProdutos } from "./endpoints/getProdutos"
import { purchases } from "./endpoints/purchases";
import { getComprasUsuario } from "./endpoints/getComprasUsuario";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", cadastroUsuarios)
app.get("/users", getUsuarios)
app.post("/products", cadastroProdutos)
app.get("/products", getProdutos)
app.post("/purchases", purchases)
app.get("/users/:user_id/purchases", getComprasUsuario)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});