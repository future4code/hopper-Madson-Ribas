import React from "react";
import Musicas from "./Components/Musicas";
import styled from 'styled-components';
import axios from "axios";

const Lista = styled.div`
    display: flex;
    flex-direction: column;
`
const Playlist = styled.div`
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h1`
    font-size: 3em;
    text-align: center;
    color: #097F00;
    `
const Titulo2 = styled.h1`
    font-size: 3em;
    margin-left: 50px;
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
const CadastroContainer = styled.div`
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
const MusicasContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px 50px 50px;
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
const PlaylistBtn = styled.button`
    color: #D1D1E6;
    margin: 10px;
    border: none;
    outline: none;
    background-color: #097F00;
    cursor: pointer;
`
const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: 1fr;
`
class App extends React.Component {

  state = {
    playlist: [],
    nome: "",
    name: "",
    artist: "",
    url: "",
    playlistAtivaId: "",
    playlistAtivaNome: "",
    tracks: [],
    trackPlaying: ""
}

componentDidMount() {
  this.getPlaylists()
}

onChangeNome = (event) => {
  this.setState({nome: event.target.value})
}

novaPlaylist = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  const body = {
      "name": this.state.nome
  }
  axios.post(url, body, {
      headers:{
      Authorization: "madson-pereira-hopper"
      }
  }).then(()=> {
    alert("Playlist criada com Sucesso!")
    this.getPlaylists()})
  .catch((err) => {alert("Falha ao criar playlist")})
  .finally(() => {
      this.setState({nome: ""})
  })
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
  }).then(()=> {
    alert("Música adicionada à sua Playlist!")    
    this.getPlaylistTracks(this.state.playlistAtivaId)
  }).catch((err) => {alert("Falha ao adicionar música")})
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

getPlaylistTracks = (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  axios.get(url, {
    headers: {
      Authorization: "madson-pereira-hopper"
    }
  }).then((res) => {
    console.log(res);
    this.setState({tracks: res.data.result.tracks})
  }).catch((err) =>{
    alert("Falha ao encontrar músicas da playlist")
  })

}

removeTrackFromPlaylist = (playlistId, trackId) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
  axios.delete(url, {
    headers: {
      Authorization: "madson-pereira-hopper"
    }
  }).then(() =>{
    alert("Música deletada com sucesso");
    this.getPlaylistTracks(this.state.playlistAtivaId)
  }).catch((err) => {
    alert("Falha ao deletar música")
  })
}

play = (trackurl) => {
  this.setState({trackPlaying: trackurl})
  console.log(this.state.trackPlaying);
  this.state.trackPlaying.play()
}

pause = (trackurl) => {
  const url = trackurl
  const audio = Audio(url);
  audio.pause()
}

  render() {
    return (
    <>
      <Page >
        <div>
          <Main>
            <Header>
              <Titulo>Labefy</Titulo>
            </Header> <br></br>
            <CadastroContainer>
              <h3>Nova Playlist</h3>
              <label>Nome</label>
                <input value={this.state.nome} onChange={this.onChangeNome}/>
              <br></br>
              <div>
                <button onClick={this.novaPlaylist}>Criar</button>
              </div>
            </CadastroContainer>
          </Main>
        </div>
        <Lista>
          <Main>
            <Header>
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
                          <PlaylistBtn onClick={() => {
                            this.setState({
                              playlistAtivaNome: playlist.name, 
                              playlistAtivaId: playlist.id})
                              this.getPlaylistTracks(playlist.id)
                              }}>
                            { playlist.name }
                          </PlaylistBtn>
                          <BotaoAdd onClick={() => {if (window.confirm("Adicionar música à sua playlist?")){this.AddMusicas(playlist.id)}}}>+</BotaoAdd>
                          <BotaoDelete onClick={() => {if(window.confirm("Deseja deletar esta playlist?")){this.delPlaylist(playlist.id)}}}>X</BotaoDelete>
                        </UsuarioContainer>
                      </ListaContainer>
                    )
                  })
                }
            </UsuariosContainer>
          </Main>
        </Lista>
        <Playlist>
          <Header>
            <Titulo2>{this.state.playlistAtivaNome}</Titulo2>
          </Header>
          {
            this.state.tracks.map((track) => {
              return (
                <ListaContainer>
                  <MusicasContainer>
                    <PlaylistBtn>
                    { track.name } - { track.artist }
                    </PlaylistBtn>
                    <BotaoAdd onClick={() => {this.play(track.url)}}>▶</BotaoAdd>
                    <BotaoAdd onClick={() => {this.pause(track.url)}}>⏸</BotaoAdd>
                    <BotaoDelete onClick={() => {if (window.confirm("Deseja deletar essa música?")){this.removeTrackFromPlaylist(this.state.playlistAtivaId, track.id)}}}>X</BotaoDelete>
                  </MusicasContainer>
                </ListaContainer>
              )
            })
          }

        </Playlist>
      </Page>
    </>
  )
}
}

export default App;
