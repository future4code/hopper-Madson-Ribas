import React from "react";
import axios from "axios";


export default class Cadastro extends React.Component {
    state = {
        nome: "",
        email:""
    }
    
    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }
    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    cadastroUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            "name": this.state.nome, 
            "email": this.state.email
        }
        axios.post(url, body, {
            headers:{
            Authorization: "madson-pereira-hopper"
            }
        }).then(()=> {alert("Usuário cadastrado com Sucesso!")})
        .catch((err) => {alert("Falha ao cadastrar usuário :C")})
        .finally(() => {
            this.setState({nome: "", email: ""})
        })
    }

    render() {
        return(
            <>
                <h1> Tela de Cadastro</h1>
                <div>
                    <button onClick={this.props.filhoUm}>Troca de Tela</button>
                </div> <br></br>
                <input placeholder="Nome" value={this.state.nome} onChange={this.onChangeNome}/>
                <input placeholder="e-Mail" value={this.state.email} onChange={this.onChangeEmail}/>
                <div>
                    <button onClick={this.cadastroUsuarios}>Cadastar usuario</button>
                </div>
            </>
        )
    }
}