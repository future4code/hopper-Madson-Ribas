import axios from "axios";
import React from "react";
import styled from 'styled-components';
import Musicas from "./Musicas";


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
    display: grid;
    grid-template-columns: 200px 50px 50px;
    background-color: #097F00;
    border: 1px solid black;
    border-radius: 10px;
    margin: 3px;
`
const BotaoDelete = styled.button`
    color: red;
    margin: 10px
`
const BotaoAdd = styled.button`
    color: blue;
    margin: 10px
`
const UsuarioP = styled.button`
    color: #D1D1E6;
    margin: 10px;
    border: none;
    outline: none;
    background-color: #097F00;
    cursor: pointer;
`

export default class Lista extends React.Component {

    state = {
        AddMusica: false,
        playlist: [],
        name: "",
        artist: "",
        url: ""
    }
    AddMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            "name": this.state.name,
            "artist": this.state.artist,
            "url": this.state.url
        }
        axios.post(url, body, {
            headers:{
            Authorization: "madson-pereira-hopper"
            }
        }).then(()=> {alert("Música adicionada à sua Playlist!")})
        .catch((err) => {alert("Falha ao adicionar música")})
        .finally(() => {
            this.setState({name: "", artist: "", url: ""})
        })
    }
    onChangeName = (event) => {
        console.log(this.state.name);
        this.setState({name: event.target.value})
    }
    onChangeArtist = (event) => {
        this.setState({artist: event.target.value})
    }
    onChangeURL = (event) => {
        this.setState({url: event.target.value})
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
                <Musicas
                onChangeName={this.onChangeName}
                onChangeArtist={this.onChangeArtist}
                onChangeURL={this.onChangeURL}
                name={this.state.name}
                artist={this.state.artist}
                url={this.state.url}
                />
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
                                        <BotaoAdd onClick={() => {if (window.confirm("Adicionar música à sua playlist?")){this.AddMusicas(playlist.id)}}}>+</BotaoAdd>
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