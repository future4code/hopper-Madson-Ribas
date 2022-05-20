import React from "react";
import axios from 'axios'

usuarios = {
    [
        {name: "mariazinha",
        email:"mariazinha@gmail.com",
        id:""},
        {name: "cartlinhos",
        email:"carlinhos@gmail.com",
        id:""}
        ]
}

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        header:{
            Authorization: "madson-ribas-hopper"
  
        }
    })
    
    

criaUsuario = () => {
    const body = {
        name:"",
        email:""
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
        headers: {
            Authorization: "madson-ribas-hopper"
        }
    })
    .then(()=>{
        alert("Usuario criado com sucesso!")
    })
    .catch((error)=>{
        alert("Usuario não pode ser criado")
    })
}

render() {

    return(
        <div>
            <p>Nome:</p>
            <input>

            </input>
            <button>Adicionar</button>
            <p>Email:</p>
            <input>

            </input>
            <button>Criar</button>
        </div>
    )
}