import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
`
const AddMusicasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Musicas extends React.Component {
    render()  {
        return(
            <Main>
                <AddMusicasContainer><h3>Adicionar Músicas a sua playlist</h3>
                        <label>Nome da Música</label>
                        <input value={this.props.name} onChange={this.props.onChangeName}/>
                        <br></br>
                        <label>Nome do Artista</label>
                        <input value={this.props.artist} onChange={this.props.onChangeArtist}/>
                        <br></br>
                        <label>Link da Música</label>
                        <input value={this.props.url} onChange={this.props.onChangeURL}/>
                    </AddMusicasContainer>
            </Main>
        )
    }
}