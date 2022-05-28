import axios from "axios";
import React from "react";
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
    background-color: #097F00;
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
        playlist: []
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.get(url, {
            headers: {
                Authorization: "madson-pereira-hopper"
            }
        }).then((res) => {
            console.log(res);
            this.setState({playlist: res.data.result.list})
        }).catch((err) => {
            console.log(err.response);
        })
    }

    delPlaylist = (id) => {
        // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
            Authorization: "madson-pereira-hopper"
            }
        }).then(() => {
            alert("Playlist deletada com sucesso");
            this.getPlaylists()
        }).catch((err) => {
            alert("Falha ao deletar playlist")
        })
    }

    render() {
        return(
            <>  
                <Main>
                <Header>
                {/* <button onClick={this.props.filhoDois}>Voltar</button> */}
                <Titulo>Playlists</Titulo>
                </Header>
                <UsuariosContainer>
                    <h3>Suas Playlists</h3>
                    {
                        this.state.playlist.map((playlist) => {
                            return (
                                <ListaContainer>
                                    <UsuarioContainer>
                                        <UsuarioP>
                                            { playlist.name }
                                        </UsuarioP>
                                        <BotaoDelete onClick={() => {if(window.confirm("Deseja deletar esta playlist?")){this.delPlaylist(playlist.id)}}}>X</BotaoDelete>
                                    </UsuarioContainer>
                                </ListaContainer>
                            )
                        })
                    }
                </UsuariosContainer>
                </Main>
            </>

        )
    }
}