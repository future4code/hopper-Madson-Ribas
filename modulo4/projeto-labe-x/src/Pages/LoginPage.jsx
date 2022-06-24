import React from "react";
import Header from "../Components/Header";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../Styles/LoginPage.css";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const navigate = useNavigate()

    const onClickLogin = () => {
        const body = {
            email: email,
            password: senha
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/login", body,)
        .then((resp) => {
            window.localStorage.setItem("token", resp.data.token)
            console.log(resp.data);
            navigate("/admin/home")
        }).catch((error) => {
            alert("Usuario ou senha incorretos")
            console.log(error)
        }).finally(()=>{
            setEmail("")
            setSenha("")
        })
    }

    return (
    <div className="mainLogin">
        <Header/>
        <div className="main-container">
            <p className="titulo" onClick={()=> {navigate("/")}}>LabeX</p>

            <div className="inputs">
                <input type="email" placeholder="Email" className="input" onChange={(event) => {setEmail(event.target.value)}}/>
                <input type="password" placeholder="Senha" className="input" onChange={(event) => {setSenha(event.target.value)}}/>
            </div>

            <div><button className="btn" onClick={() => {onClickLogin()}}>Entrar</button></div>

        </div>
    </div>
    )
}

export default LoginPage;   