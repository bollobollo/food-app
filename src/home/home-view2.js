import styled, {css, keyframes} from "styled-components";
import Rest from "../common/rest-preview.js"

const scale = keyframes`
  0%{transform: scale(1, 1);}
  100%{transform: scale(1.05, 1.05);}`;

const Wrapper = styled.div`
  // Dimensiones de la caja
  box-sizing: content-box;
  height: 93vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  padding-top: 4vh;
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
    word-wrap: break-word;
    //Posicionamiento por línea
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    //Creación de grid para este componente en particular
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);


  ${props => props.two && css`
    /*background: #6041a3;*/
    min-width: 200px;
    min-height: 200px;
    background: transparent;
    color: black;
    overflow-y: visible;
    overflow-x: hidden;
    //Posicionamiento por línea
    grid-column: 2 / 8;
    grid-row: 1 / 2;
    // flex
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #F72585;
    border-radius: 20vw;
  }
  `}
`;

const Filter = styled.a`
    background: red;
    cursor: pointer;
    grid-column: 1;
    grid-row: 1 / 2;
    &:hover {
    animation: ${scale} 150ms cubic-bezier(0.1, 1.7, 1.0, 1.9) forwards;
    filter: contrast(150%) brightness(95%);
    box-shadow: .1em .1em 0px orange;
  }
    
    ${props => props.two && css`
    background: yellow;
    grid-column: 1;
    grid-row: 2 / 3;
    `}
  
    ${props => props.three && css`
      background: white;
      grid-column: 1;
      grid-row: 3 / 4;
    `}

    ${props => props.four && css`
      background: green;
      grid-column: 1;
      grid-row: 4 / 5;
    `}
`;

function HView2() {
    return (
      <div style={{boxSizing: "content-box", height: "100%", width: "100%", minWidth: "1000px", display: "flex", background: "#3C0CA3", position: "relative"}}>
        <Wrapper><Box><Filter>Hola</Filter><Filter two>Hola</Filter><Filter three>Hola</Filter><Filter four>Hola</Filter></Box><Box two><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/><Rest/></Box></Wrapper>
      </div>
    );
  }
  
  export default HView2;