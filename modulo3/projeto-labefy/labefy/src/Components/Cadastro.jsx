import React from "react";
import axios from "axios";
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h1`
    font-size: 3em;
    text-align: center;
    color: #097F00;
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
        nome: ""
    }
    
    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }
    // onChangeEmail = (event) => {
    //     this.setState({email: event.target.value})
    // }

    cadastroUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            "name": this.state.nome
        }
        axios.post(url, body, {
            headers:{
            Authorization: "madson-pereira-hopper"
            }
        }).then(()=> {alert("Playlist criada com Sucesso!")})
        .catch((err) => {alert("Falha ao criar playlist")})
        .finally(() => {
            this.setState({nome: ""})
        })
    }

    render() {
        return(
            <>  
            <Main>
                 <Header>
                    {/* <button onClick={this.props.filhoUm}>Usuários</button> */}
                    <Titulo>Labefy</Titulo>
                </Header> <br></br>
                <CadastroContainer>
                    <h3>Nova Playlist</h3>
                    <label>Nome</label>
                    <input value={this.state.nome} onChange={this.onChangeNome}/>
                    {/* <br></br>
                    <label>E-Mail</label>
                    <input value={this.state.email} onChange={this.onChangeEmail}/> */}
                    <br></br>
                    <div>
                        <button onClick={this.cadastroUsuarios}>Criar</button>
                    </div>
                </CadastroContainer>
                </Main>
            </>
        )
    }
}