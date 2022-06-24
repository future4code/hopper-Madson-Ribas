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
        }).catch((error) => {
            console.log(error);
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
                    <p className="adminHeaderTitle">Logout</p>
                </div>

                <div className="page-container">

                    <div className="trips-container">
                        <p className="detailsTripTitulo">Destino</p>
                        {
                            trips.map((trip) => {
                                return (
                                    <p className="trips" key={trip.id} onClick={() => {getTripDetail(trip.id)}}> { trip.name } </p>
                                )
                            })
                        }
                        <p className="aprovados">Aprovados</p>
                        {
                            candidate &&
                            candidate.map((candidate) => {
                                return (
                                    <p className="candidatos" key={candidate.id}> - {candidate.name} </p>
                                )
                            })
                        }
                    </div>
                
                <div className="candidatos-container">
                    <p className="detailsTripTituloCandidatos">Candidatos</p>
                    {
                        candidate &&
                        candidate.map((candidate) => {
                            return (
                                <Candidato key={candidate.id}
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
)
}

export default TripDetailsPage;