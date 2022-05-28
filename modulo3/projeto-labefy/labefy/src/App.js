import React from "react";
import Cadastro from "./Components/Cadastro";
import Lista from "./Components/Lista";
import styled from 'styled-components';

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: 1fr;
`

class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  trocaDeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual=== "cadastro"
      ? "lista"
      : "cadastro"
    })
  }


  render() {
    return (
    <>
      <Page >
        <Cadastro/>
        <Lista/>
        <div>
          <h1>
          Musicas
          </h1>
        </div>
      </Page>
      {/* {
        this.state.telaAtual === "cadastro" 
        ? <Cadastro filhoUm={this.trocaDeTela}/> 
        : <Lista filhoDois={this.trocaDeTela}/>
      }
 */}

    </>
  )
}
}

export default App;
