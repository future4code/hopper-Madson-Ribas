import React from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useState } from "react";

const SignUpPage = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const criarUsuario = () => {
        const body = {
            email: email,
            password: senha
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/signup", body,)
        .then((resp) => {
            console.log(resp);
        }).catch((error) => {
            console.log(error)
        })
    }


    return(
    <>
        <Header/>
        <h3>SignUp</h3>
        <h4>Criar usuario</h4>
        <input type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="password" placeholder="Senha" onChange={(event) => {setSenha(event.target.value)}}/>
        <button onClick={() => {criarUsuario()}}>Criar</button>

    </>

)}

export default SignUpPage;