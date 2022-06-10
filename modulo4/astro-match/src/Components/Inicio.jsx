import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";
import { css } from "./Inicio.css";

export default function Inicio() {

    const [profile, setProfile] = useState({})
    const [userChoice, setUserChoice] = useState(false)


    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/person" )
        .then(response => {
           setProfile(response.data.profile)
           console.log(response.data.profile)
        }).catch((err) => {
            console.log(err);
        })
    
    },[])

    const getNewMatch = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/person" )
        .then(response => {
           setProfile(response.data.profile)
        }).catch((err) => {
            console.log(err);
        })
    }


    const choosePerson = (choice) => {
        let body = {}
        if (choice) {
            body = {
            "id": profile.id,
            "choice": !userChoice
            }}

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/choose-person", body, {
        }).then(() => {
            getNewMatch()
            console.log("Match!!");        
        }).catch((err) =>{
            console.log(err);
        })
    }

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/matches" )
        .then(response => {
           console.log(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    
    return (        
        <div className="fundo">
            <div className="main">
                <div className="fotoPerfil"> 
                    <img src={ profile.photo } alt={ profile.alt }/> 
                </div>
                <div className="perfil">
                    <p className="bio"> { profile.bio } </p>
                    <p> <b>{profile.name}</b>, {profile.age} anos </p>
                </div>
                <div className="containerBtn">
                    <button className="btnNao" onClick={() => {getNewMatch()}}>X</button>
                    <button className="btnSim" onClick={() => {choosePerson(true)}}>♥</button>
                </div>
            </div>
        </div>
    )
}