import styled, {css} from "styled-components";
import Nav from '../common/navbar.js';

const Wrapper = styled.div`
  // Dimensiones de la caja
  box-sizing: content-box;
  height: 93vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  padding-top: 7vh;
  padding-left: 2em;
  padding-right: 2em;
  

  // Definición de rejilla, dimensiones de retícula y márgenes
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1em;
  column-gap: 1em;
  row-gap: 1em;
  // Estilos
  background: transparent;
  `;

const Box = styled.div`
  background: #4C6F7A;
  border-radius: 2vw;
  word-wrap: break-word;
  //Posicionamiento por línea
  grid-column: 1;
  grid-row: 1 / 9;

  ${props => props.two && css`
    background: #D9D9D9;
    color: black;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 1 / 6;
    display: grid;
    grid-template-columns: repeat(21, 1fr);
    grid-template-rows: repeat(18 , 1fr);
  `}

  ${props => props.three && css`
    background: #D9D9D9;
    color: black;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 6 / 9;

    ${props => props.wide && css`
      padding: .125em;
      background: rgb(37,37,224);
      background: linear-gradient(90deg, rgba(37,37,224,0) 10%, rgba(37,37,224,0.6503460912052117) 49%, rgba(37,37,224,1) 76%);
      color: white;
      text-align: right;
      font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
      font-weight: bold;
      font-size: 6.7vw;
    `}
  `}
`;

const Text = styled.p`
  width: 250px;
  height: 500px;
  background: gray;
  color: black;
`;

const Image = styled.img`
  border-radius: 2vw;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%`;

const Cat_Frames = styled.a`
  grid-column: 1;
  grid-row: 1 / 9;`;

function HView1() {
  return (
    <div style={{boxSizing: "content-box", height: "100vh", width: "100%", display: "flex"}}>
      <Nav/>
      <Wrapper className="App" style={{}}>
          <Box><Image src={"https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}></Image></Box>
          <Box two>Hola</Box>
          <Box three wide>¿Qué comemos hoy?</Box>
      </Wrapper>
    </div>
  );
}

export default HView1;