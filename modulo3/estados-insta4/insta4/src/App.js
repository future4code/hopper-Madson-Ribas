import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/400/300'}
        />
        <Post
          nomeUsuario={'mendoca'}
          fotoUsuario={'https://picsum.photos/70/70'}
          fotoPost={'https://picsum.photos/600/450'}
        />
        <Post
          nomeUsuario={'madmax'}
          fotoUsuario={'https://picsum.photos/90/90'}
          fotoPost={'https://picsum.photos/800/600'}
        />
      </MainContainer>
    );
  }
}

export default App;
