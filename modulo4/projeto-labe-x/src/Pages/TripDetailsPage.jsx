import React from "react";
import Header from "../Components/Header";
import { useAutenticaUsuario } from "../Components/Hooks/useAutenticaUsuario";

const TripDetailsPage = () => {
    
    useAutenticaUsuario()

    return<>
    <Header/>
        <h3>Trip Details</h3>
    </>

}

export default TripDetailsPage;