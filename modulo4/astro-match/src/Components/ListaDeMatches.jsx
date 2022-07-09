import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";
import Inicio from "./Inicio";
import { css } from "./ListaDeMatches.css";


export default function ListaDeMatches(props) {

    const [matches, setMatches] = useState([])
    const [clear, setClear] = useState(false)

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/matches",)
        .then(response => {
            setMatches(response.data.matches)
            console.log(response.data.matches);
        })
    },[clear,{data: props.profile}])

    const onClickClear = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madson-pereira-hopper/clear")
        .then(() => {
            setClear(!clear)
        }).catch(error => {
            console.error(error);
        })
    }

    return(
        <div className="body">
            <div className="header">
                <p> 
                    <button className="clearBtn" onClick={() => { onClickClear(!clear) }}>Limpar Matches</button>
                </p>
                <p> 
                    <button className="tituloBtn">AstroMatch</button>
                </p>
            </div>
            <div className="listaMatches">
                {matches.map((match) => {
                    return (<div className="match">
                                <button className="matchBtn"> 
                                    <img className="imgMatch" src={match.photo} alt={match.alt} />
                                    { match.name } 
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}