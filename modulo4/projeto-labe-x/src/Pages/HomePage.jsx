import React from "react";
import Header from "../Components/Header";
import {useNavigate} from "react-router-dom"
import "../Styles/HomePage.css"

const HomePage = () => {

    const navigate = useNavigate()

    return (
    <div className="main">
        <Header/>
        <div className="main-content">
            <p className="titulo">LabeX</p>
            <p className="login" onClick={()=> {navigate("/login")}}>Login</p>
            <p className="viagens" onClick={()=> {navigate("/trips/list")}}>Viagens</p>
        </div>
    </div>

)}

export default HomePage;