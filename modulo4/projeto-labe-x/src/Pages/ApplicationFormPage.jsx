import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "../Styles/ApplicationFormPage.css"

 const AplicationFormPage = () => {

    const navigate = useNavigate()

    return(
        <div className="main-page-form">
            <Header/>
            <div className="main-container-form">
                <div className="userHeader">
                    <p className="userTitulo" onClick={() => { navigate("/") }}>LabeX</p>
                    <p className="userTitle" onClick={() => { navigate("/trips/list") }}>Voltar</p>
                    <p className="userLogin" onClick={() => { navigate("/login") }}>Login</p>
                </div>
                <div className="input-container-form">
                    <p className="viagemTitulo">Novo Destino</p>
                    <input className="formTripInput" type="text" placeholder="Nome"/>
                    <input className="formTripInput" type="number" placeholder="Idade"/>
                    <input className="formTripInput" type="text" placeholder="Profissão"/>
                    <input className="formTripInput" type="text" placeholder="Nacionalidade"/>
                    <textarea cols={30} rows={5} className="formTripInputDescr"  type="text" placeholder="Texto de Candidatura"/>
                    <button className="form-button">Enviar Candidatura</button>
                </div>
            </div>
        </div>
    )

}

export default AplicationFormPage;