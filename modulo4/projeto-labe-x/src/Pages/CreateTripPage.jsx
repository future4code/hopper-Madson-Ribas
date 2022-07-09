import axios from "axios";
import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header";
import { useAutenticaUsuario } from "../Components/Hooks/useAutenticaUsuario";
import "../Styles/CreateTripPage.css"

const CreateTripPage = () => {
    
    useAutenticaUsuario()

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        planet: "", 
        date: "",
        description: "",
        durationInDays: ""
    })

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const logout = () => {
        window.localStorage.clear()
        navigate("/login")
    }

    const createTrip = (event) => {
        event.preventDefault();
        
        const body = form
        

        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        console.log(body);

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/trips", body, headers)
        .then(() => {
            alert("Viagem criada com sucesso!")
        })
        .catch((err) => {
            alert("Falha ao criar viagem")
            console.log(err);
        }).finally(() => {
            setForm({
                name: "",
                planet: "", 
                date: "",
                description: "",
                durationInDays: ""
            })
        })
    }

    return (
    <div className="main-page">
        <Header/>
        <div className="main-container">
            <div className="adminHeader">
                <p className="createTripTitulo" onClick={() => { navigate("/") }}>LabeX</p>
                <p className="adminHeaderTitle" onClick={() => { navigate("/admin/trips") }}>Viagens</p>
                <p className="adminHeaderTitle" onClick={() => { navigate("/admin/home") }}>Voltar</p>
                <p className="adminHeaderTitle" onClick={() => {if (window.confirm("Deseja sair?")) { logout() }}}>Logout</p>
            </div>
            <div className="input-container">
                <form onSubmit={createTrip}>
                    <p className="novaViagemTitulo">Novo Destino</p>
                    <input required className="createTripInput" name="name" value={form.name} type="text" placeholder="Nome" onChange={onChange}/>
                    <select required className="createTripOption" name="planet" value={form.planet} onChange={onChange}>
                        <option value="">Selecione o Destino</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                        <option value="Plutão">Plutão</option>
                    </select>
                    <input required className="createTripInput" name="date" value={form.date} type="date" placeholder="Data" onChange={onChange}/>
                    <input required className="createTripInput" name="durationInDays" value={form.durationInDays} type="number" placeholder="Duração em dias" onChange={onChange}/>
                    <textarea required cols={30} rows={5} className="createTripInputDescr" name="description" value={form.description}  type="text" placeholder="Descrição" onChange={onChange}/>
                    <button className="button">Criar viagem</button>
                </form>
            </div>
        </div>
    </div>
)}

export default CreateTripPage;