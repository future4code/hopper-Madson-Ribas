import React, { useState } from "react";
import Header from "../Components/Header";
import { useAutenticaUsuario } from "../Components/Hooks/useAutenticaUsuario";
import { useNavigate } from "react-router-dom";
import "../Styles/TripDetailsPage.css"
import axios from "axios";
import { useEffect } from "react";
import Candidato from "../Components/Candidato.jsx"

const TripDetailsPage = () => {

    const [trips, setTrips] = useState([])
    const [trip, setTrip] = useState(null)
    const [candidate, setCandidate] = useState([])
    const [aprovados, setAprovados] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/trips")
        .then((resp) => {
            setTrips(resp.data.trips)
            console.log(resp.data.trips);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("state", trips);
        })
    },[])

    useAutenticaUsuario()

    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear()
        navigate("/login")
    }
    
    const getTripDetail = (id) => {

        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/trip/${id}`, headers)
        .then((resp) => {
            console.log(resp.data.trip);
            setTrip(resp.data.trip)
            setCandidate(resp.data.trip.candidates)
            setAprovados(resp.data.trip.approved)
        }).catch((error) => {
            console.log(error);
        })
    }

    const deleteTrip = (tripId) => {

        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/madson/trips/${tripId}`, headers)
        .then(() => {
            alert("Viagem deletada")
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            window.location.reload()
        })
    }

    return (
        <div className="main-page-details">
            <Header/>
            <div className="main-container">

                <div className="adminHeader">
                    <p className="createTripTitulo" onClick={() => { navigate("/") }}>LabeX</p>
                    <p className="adminHeaderTitle" onClick={() => { navigate("/admin/trips/create") }}>Nova Viagem</p>
                    <p className="adminHeaderTitle" onClick={() => { navigate("/admin/home") }}>Voltar</p>
                    <p className="adminHeaderTitle" onClick={() => {if (window.confirm("Deseja sair?")) { logout() }}}>Logout</p>
                </div>

                <div className="page-container">

                    <div className="trips-container-Details">
                        <p className="detailsTripTitulo">Destino</p>
                        <div className="destinos">
                            {
                                trips.map((trip) => {
                                    return (
                                        <p className="trips" key={trip.id} onClick={() => {getTripDetail(trip.id)}}> { trip.name } <button onClick={() => {if (window.confirm("Deseja apagar esta viagem?")){deleteTrip(trip.id)}}}>X</button> </p>
                                    )
                                })
                            }
                        </div>
                        <p className="aprovados">Aprovados</p>
                        <div  className="aprovados-scroll">
                            {
                                aprovados &&
                                aprovados.map((candidate) => {
                                    return (
                                        <p className="candidatos" key={candidate.id}> - {candidate.name} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                
                <div className="candidatos-container">
                    <p className="detailsTripTituloCandidatos">Candidatos</p>
                    <div className="mapDeCandidatos">
                         {
                        candidate &&
                        candidate.map((candidate) => {
                            return (
                                <Candidato key={candidate.id}
                                idCandidato={candidate.id}
                                idViagem={trip.id}
                                name={candidate.name}
                                idade={candidate.age}
                                profissao={candidate.profession}
                                nacionalidade={candidate.country}
                                descricao={candidate.applicationText}
                                > - {candidate.name} </Candidato>
                            )
                        })
                    }
                    </div>
                </div>
                </div>
            </div>
            
        </div>
)
}

export default TripDetailsPage;