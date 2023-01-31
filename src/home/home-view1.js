import styled, {css, keyframes} from "styled-components";
import Nav from '../common/navbar.js';
import Main_video from '../video/main_cook.mp4';
import Icon1 from '../img/icons/icon1.png';
import Icon2 from '../img/icons/icon2.png';
import Icon3 from '../img/icons/icon3.png';
import Icon4 from '../img/icons/icon4.png';
import Icon5 from '../img/icons/icon5.png';
import Icon6 from '../img/icons/icon6.png';
import Icon7 from '../img/icons/icon7.png';

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
  padding-top: 7vh;
  padding-left: 4vw;
  padding-right: 4vw;
  

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
    background: transparent;
    color: black;
    cursor: pointer;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 1 / 6;
    display: grid;
    grid-template-columns: repeat(40, 1fr);
    grid-template-rows: repeat(35 , 1fr);
  `}

  ${props => props.three && css`
    border-radius: 0 2vw 0 0;
    background: #D9D9D9;
    color: black;
    //Posicionamiento por línea
    grid-column: 2 / 3;
    grid-row: 6 / 9;

    ${props => props.wide && css`
      padding: .125em;
      background: transparent;
      color: white;
      text-align: right;
      font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
      font-weight: bold;
      font-size: 6.7vw;
      -webkit-text-stroke: .1vw #3C0CA3;
      text-shadow: .50vw .39vw 0px yellow;
    `}
  `}
`;

const Text = styled.p`
  width: 250px;
  height: 500px;
  background: gray;
  color: black;
`;

const Video = styled.video`
  border-radius: 2vw;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%`;

const Icon = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;`;

//35 horizontal, 41 vertical

const Cat_frames = styled.a`
  background: transparent;
  font-family: Times New Roman, "Trebuchet MS", Verdana, sans-serif;
  &:hover {
    animation: ${scale} 150ms cubic-bezier(0.1, 1.7, 1.0, 1.9) forwards;
    filter: contrast(150%) brightness(85%);
  }

  
  ${props => props.one && css`
  background: red;
  grid-column: 1 / 7;
  grid-row: 1 / 7 ;`}

  ${props => props.two && css`
  background: blue;
  grid-column: 7 / 27;
  grid-row: 1 / 21;`}
  
  ${props => props.three && css`
  background: yellow;
  grid-column: 27 / 41;
  grid-row: 1 / 14 ;`}
  
  ${props => props.four && css`
  background: purple;
  grid-column: 1 / 7;
  grid-row: 7 / 21;`}
  
  ${props => props.five && css`
  background: green;
  grid-column: 27 / 41;
  grid-row: 14 / 21;`}
  
  ${props => props.six && css`
  border-radius: 0 0 0 2vh;
  background: pink;
  grid-column: 1 / 20;
  grid-row: 21 / 41;`}
  
  ${props => props.seven && css`
  border-radius: 0 0 2vh 0;
  background: #FDC500;
  grid-column: 20 / 41;
  grid-row: 21 / 41;`};`


function HView1() {
  return (
    <div style={{boxSizing: "content-box", height: "100vh", width: "100%", display: "flex"}}>
      <Nav/>
      <Wrapper className="App" style={{}}>
          <Box><Video play loop muted autoPlay src={Main_video}/></Box>
          <Box two><Cat_frames one><Icon src={Icon1} alt={'icono'}/></Cat_frames><Cat_frames two><Icon src={Icon2} alt={'icono'}/></Cat_frames><Cat_frames three><Icon src={Icon3} alt={'icono'}/></Cat_frames><Cat_frames four><Icon src={Icon4} alt={'icono'}/></Cat_frames><Cat_frames five><Icon src={Icon5} alt={'icono'}/></Cat_frames><Cat_frames six><Icon src={Icon6} alt={'icono'}/></Cat_frames><Cat_frames seven><Icon src={Icon7} alt={'icono'}/></Cat_frames></Box>
          <Box three wide>¿Qué comemos hoy?</Box>
      </Wrapper>
    </div>
  );
}

export default HView1;