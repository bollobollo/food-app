import './App.css';
import Ill from './home-illustration.js'
import styled, {css} from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 1fr;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  column-gap: 1em;
  row-gap: 1em;
  background: green;
  `;

const Box = styled.div`
  background: gray;
  border-radius: 2vw;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 9;

  ${props => props.two && css`
    background: palevioletred;
    color: black;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 6;
  `}

  ${props => props.three && css`
    background: yellow;
    color: black;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 9;

    ${props => props.wide && css`
      color: green;
    `}
  `}
`;

function App() {
  return (
    <Wrapper className="App">
      <Box>Hola</Box>
      <Box two>Hola</Box>
      <Box three wide>Hola</Box>
    </Wrapper>
  );
}

export default App;
