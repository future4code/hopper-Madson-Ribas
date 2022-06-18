import React from "react";
import Header from "../Components/Header";
import {useNavigate} from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage = () => {

    const navigate = useNavigate()

    return (
    <div className="mainLogin">
        <Header/>
        <div className="main-container">
            <p className="titulo" onClick={()=> {navigate("/")}}>LabeX</p>

            <div className="inputs">
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Senha" className="input"/>
            </div>

            <div><button className="btn">Entrar</button></div>
        </div>
    </div>
    )
}

export default LoginPage;   