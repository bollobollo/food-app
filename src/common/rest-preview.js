import styled, {css, keyframes} from "styled-components";

const scale = keyframes`
  0%{transform: scale(1, 1);}
  100%{transform: scale(1.05, 1.05);}`;

const Box = styled.a`
    width: 30%;
    min-width: 200px;
    height: 31%;
    min-height: 200px;
    margin: .7%;
    background: white;
    border-radius: 1vw;
    cursor: pointer;
    font-size: 1em;
    padding: .3em;
    transition: width 500ms;
    transition-delay: 500ms;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7 , 1fr);

    &:hover {
    width: 58%;
    animation: ${scale} 150ms cubic-bezier(0.1, 1.7, 1.0, 1.9) forwards;
    filter: contrast(150%) brightness(95%);
    box-shadow: .1em .2em 0px yellow; 
    animation-delay: 500ms;
  }
    `;

const Img = styled.img`
    object-fit: cover;
    grid-column: 1;
    grid-row: 1 / 3 ;`;


function Rest() {
  return (
    <Box>
      <Img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      Hola cómo estás?
    </Box>
  );
}

export default Rest;