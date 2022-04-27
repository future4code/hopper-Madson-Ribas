import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component{

  state = {
    valorContador: 0
  }

  onClickSoma = () =>{
    const valorAtual = this.state.valorContador 
    const proximoValor = valorAtual + 1

    this.setState({valorContador : proximoValor})
  }

  onClickSubtrai = () => {
    this.setState({valorContador : this.state.valorContador - 1})
  }

  render() {
    return (
      <>
        <h1>{this.state.valorContador}</h1>
        <button onClick={this.onClickSoma}> + </button>
        <button onClick={this.onClickSubtrai}> - </button>
      </>
    );
  }
}
export default App;
