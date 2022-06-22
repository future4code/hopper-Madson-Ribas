import axios from "axios";
import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import { useAutenticaUsuario } from "../Components/Hooks/useAutenticaUsuario";

const CreateTripPage = () => {
    
    useAutenticaUsuario()

    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState("")

    const createTrip = () => {

        const data = new Date(date).toLocaleDateString("pt-br")
        
        const body = {
            name: name,
            planet: planet, 
            date: data,
            description: description,
            durationInDays: durationInDays
        }

        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        console.log(body);

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson-pereira-hopper/trips", body, headers)
        .then(() => {
            alert("Viagem criada com sucesso!")
        })
        .catch((err) => {
            alert("Falha ao criar viagem")
            console.log(err);
        })
    }

    return (
    <div className="main-page">
        <Header/>
        <div className="main-container">
            <div className="input-container">
                <input type="text" placeholder="Nome" onChange={(event) => {setName(event.target.value)}}/>
                <input type="text" placeholder="Planeta" onChange={(event) => {setPlanet(event.target.value)}}/>
                <input type="date" placeholder="Data" onChange={(event) => {setDate(event.target.value)}}/>
                <input type="text" placeholder="Descrição" onChange={(event) => {setDescription(event.target.value)}}/>
                <input type="number" placeholder="Duração em dias" onChange={(event) => {setDurationInDays(event.target.value)}}/>
                <button onClick={() => { createTrip() }}>Criar viagem</button>
            </div>
        </div>
    </div>
)}

export default CreateTripPage;