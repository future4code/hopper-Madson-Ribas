import React from "react";
import Cadastro from "./Components/Cadastro";
import Lista from "./Components/Lista";


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
      {
        this.state.telaAtual === "cadastro" 
        ? <Cadastro filhoUm={this.trocaDeTela}/> 
        : <Lista filhoDois={this.trocaDeTela}/>
      }


    </>
  )
}
}

export default App;
