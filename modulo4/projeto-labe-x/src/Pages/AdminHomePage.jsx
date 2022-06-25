import React from "react";
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom";
import "../Styles/AdminHomePage.css"
import { useAutenticaUsuario } from "../Components/Hooks/useAutenticaUsuario";

const AdminHomePage = () => {

    useAutenticaUsuario()

    const navigate = useNavigate() 

    return (
        <div className="mainADMHomePage">
        <Header/>
        <div className="main-container">
         
            <div className="header">
                <p className="titulo" onClick={() => { navigate("/") }}>LabeX</p>
                <p className="logout">Logout</p>
            </div>

            <div className="options-container">
                <p className="option" onClick={() => {navigate("/admin/trips")}}>Suas Viagens</p>
                <p className="option" onClick={() => {navigate("/admin/trips/create")}}>Nova Viagem</p>
            </div>
        </div>
    </div>
)}

export default AdminHomePage;