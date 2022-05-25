import React from 'react';
import './App.css';
import Etapa_1 from './components/etapa1';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      escolaridade: "1"
    };
  }

  render() {

    return (
      <div>
        <Etapa_1 />
      </div>
    )

}
}
export default App
