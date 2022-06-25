import React from "react";
import Header from "../Components/Header";
import "../Styles/ListTripPage.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ListTripPage = () => {

    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

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


    return (
        <div className="list-page">
            <Header/>
            <div className="main-container-list">
                <div className="userHeader">
                    <p className="userTitulo" onClick={() => { navigate("/") }}>LabeX</p>
                    <p className="userHeaderTitle" onClick={() => { navigate("/login") }}>Login</p>
                </div>
            </div>
            <div className="trips-list-Container">
                {
                    trips && trips.map((trip) => {
                            return (
                                <div className="trip-Container">
                                    <p className="list-trips" key={trip.id}> { trip.name } </p>
                                    <p className="descricao"> {trip.description} </p>
                                    <p className="destino"> {trip.planet} </p>
                                    <p className="descricao"> Duração: {trip.durationInDays} dias.</p>
                                    <p className="data">Data: {trip.date} </p>
                                </div>
                            )
                        })
                    }
            </div>
         </div>
    )
}
export default ListTripPage;