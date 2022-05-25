import axios from "axios";
import React from "react";
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

const UsuariosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ListaContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px
`
const UsuarioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #56568C;
    border: 1px solid black;
    border-radius: 10px;
    margin: 3px;
`
const BotaoDelete = styled.button`
    color: red;
    margin: 10px
`
const UsuarioP = styled.p`
    color: #D1D1E6;
    margin: 10px;
`

export default class Lista extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getUsuarios()
    }

    getUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        axios.get(url, {
            headers: {
                Authorization: "madson-pereira-hopper"
            }
        }).then((res) => {
            console.log(res);
            this.setState({usuarios: res.data})
        }).catch((err) => {
            console.log(err.response);
        })
    }

    delUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
            Authorization: "madson-pereira-hopper"
            }
        }).then(() => {
            alert("Usuário deletado com sucesso");
            this.getUsuarios()
        }).catch((err) => {
            alert("Falha ao deletar usuario")
        })
    }

    refreshPage = () => {
        window.location.reload()
    }

    render() {
        return(
            <>  
                <button onClick={this.props.filhoDois}>Voltar</button>
                <Header>
                <Titulo>Lista de Usuários</Titulo>
                </Header>
                <UsuariosContainer>
                    <h3>Usuários cadastrados</h3>
                    {
                        this.state.usuarios.map((usuario) => {
                            return (
                                <ListaContainer>
                                    <UsuarioContainer>
                                        <UsuarioP>
                                            { usuario.name }
                                        </UsuarioP>
                                        <BotaoDelete onClick={() => {if(window.confirm("Deseja deletar este usuário?")){this.delUsuario(usuario.id)}}}>X</BotaoDelete>
                                    </UsuarioContainer>
                                </ListaContainer>
                            )
                        })
                    }
                </UsuariosContainer>
            </>
        )
    }
}