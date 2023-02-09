import styled, {css, keyframes} from "styled-components";
import Nav from '../common/navbar.js';

const Wrapper = styled.div`
  // Dimensiones de la caja
  box-sizing: content-box;
  height: 100vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  padding-top: 7vh;
  padding-left: 4vw;
  padding-right: 4vw;
  

  // Definición de rejilla, dimensiones de retícula y márgenes
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1em;
  column-gap: 1em;
  row-gap: 1em;
  // Estilos
  background: transparent;
  `;

const Box = styled.div`
    background: #6041a3;
    border-radius: 2vw;
    word-wrap: break-word;
    //Posicionamiento por línea
    grid-column: 1 / 2;
    grid-row: 1 / 2;

  ${props => props.two && css`
    background: #6041a3;
    color: black;
    cursor: pointer;
    //Posicionamiento por línea
    grid-column: 2 / 8;
    grid-row: 1 / 2;
    display: flex;
  `}
`;

const Rest = styled.a`
    `;

function HView2() {
    return (
      <div style={{boxSizing: "content-box", height: "100%", width: "100%", display: "flex", background: "#3C0CA3"}}>
        <Wrapper><Box></Box><Box two></Box></Wrapper>
      </div>
    );
  }
  
  export default HView2;