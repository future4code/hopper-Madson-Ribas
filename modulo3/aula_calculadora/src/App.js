import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component{

  state = {
    valorNome :'',
    valorEmail: ''
  }

  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  }

  render() {
    return (
      <>
        <input name={"nome"} onChange={this.onChangeNome} value={this.state.valorNome} />
        <input name={"email"} onChange={this.onChangeEmail} value={this.state.valorEmail} />
      </>
    );
  }
}
export default App;
