import React from "react";
import axios from "axios";
import styled from 'styled-components';


const Titulo = styled.h1`
    font-size: 3em;
    text-align: center;
    color: #010177;
    `

const Header = styled.div`
    display: grid:
    grid-template-columns: 10vw 90vw;
`
const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


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
                 <Header>
                    <button onClick={this.props.filhoUm}>Usuários</button>
                    <Titulo>LabenUsers</Titulo>
                </Header> <br></br>
                <CadastroContainer>
                    <h3>Cadastro de Usuário</h3>
                    <h4>Novo usuário</h4>
                    <label>Nome</label>
                    <input value={this.state.nome} onChange={this.onChangeNome}/>
                    <br></br>
                    <label>E-Mail</label>
                    <input value={this.state.email} onChange={this.onChangeEmail}/>
                    <br></br>
                    <div>
                        <button onClick={this.cadastroUsuarios}>Cadastar usuario</button>
                    </div>
                </CadastroContainer>
            </>
        )
    }
}