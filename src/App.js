import './App.css';
// import Ill from './home-illustration.js'
import styled, {css} from "styled-components";

const Wrapper = styled.div`
  // Dimensiones de la caja
  height: 100vh;
  width: 100vw;
  max-width: 2000px;
  min-width: 800px;
  // Definición de rejilla y dimensiones de retícula
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1em;
  column-gap: 1em;
  row-gap: 1em;
  // Estilos
  background: green;
  `;

const Box = styled.div`
  background: gray;
  border-radius: 2vw;
  word-wrap: break-word;
  //Posicionamiento por línea
  grid-column: 1;
  grid-row: 1 / 9;

  ${props => props.two && css`
    background: palevioletred;
    color: black;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 1 / 6;
  `}

  ${props => props.three && css`
    background: yellow;
    color: black;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 6 / 9;

    ${props => props.wide && css`
      color: green;
    `}
  `}
`;

const Text = styled.p`
  width: 250px;
  height: 500px;
  background: gray;
  color: black;
`;

function App() {
  return (
    <div>
      <Wrapper className="App">
        <Box>Hola</Box>
        <Box two>Hola</Box>
        <Box three wide>Hola</Box>
      </Wrapper>
    </div>

  );
}

export default App;