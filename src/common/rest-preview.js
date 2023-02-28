import styled, {css, keyframes} from "styled-components";

const Box = styled.a`
    width: 47%;
    min-width: 200px;
    height: 35%;
    min-height: 200px;
    margin: .7%;
    border-radius: 1vw;
    cursor: pointer;
    font-size: 1em;
    padding: .3em;
    display: grid;
    grid-template-columns: repeat(8 , 1fr);
    grid-template-rows: repeat(7 , 1fr);
    background: white;

    &:hover {
    box-shadow: .1em .2em 0px yellow; 
    animation-delay: 500ms;
  }`;

const Imgbox = styled.div`
  background: blue;
  overflow: hidden;
  grid-column: 1 / 5;
  grid-row: 1 / 8 ;
  border-radius: 1vw 0 0 1vw;
  `;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;`;

const TextBr = styled.div`
  background: yellow;
  border-radius: 0 1vw 1vw 0;
  border: black solid 1px;
  grid-column: 5 / 9;
  grid-row: 1 / 8;`;

const Title = styled.div`
  background: white;
  grid-column: 5 / 9;
  grid-row: 1 / 2;
  border-radius: 0 1vw 0 0;
  border-bottom: black solid 1px;
  max-width: 100%;
  overflow: hidden;
  display:inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 2%;
  padding-left: 2.5%;
  text-align: left;
  font-weight: bold;
  font-size: clamp(.5rem, 1.7rem, 5rem);
  color: black;
  transition: all 100ms cubic-bezier(0, 0.2, .9, 1);
  
  &:hover {
    text-shadow: .2vw .2vw blue;
    color: white;
    -webkit-text-stroke: .05vw blue;
  }`;

const Des = styled.div`
  grid-column: 5 / 9;
  grid-row: 2 / 7;
  display: block;
  max-height: 65%;
  background: transparent;
  margin-left: 1.5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  padding-top: 2.5%;
  overflow: hidden visible;
  text-overflow: ellipsis;
  font-size: clamp(.2rem, auto, 5rem);

  ::-webkit-scrollbar {
    width: .5vw;
  }

  ::-webkit-scrollbar-thumb {
    background: #F72585;
    border-radius: .2vw;
  }
  `;

const SeeM = styled.a`
  grid-column: 5 / 9;
  grid-row: 7 / 8;
  padding-right: 2.5%;
  background: white;
  border: black solid 1px;
  border-radius: 0 0 1vw 0;
  display:flex;
  align-items: center;
  justify-content: end;
  transition: all 180ms cubic-bezier(0, 0.2, .9, 1);
  
  &:hover {
    background: blue;
    color: white;
  };`;

const Arrow = styled.div`
  transition: all 300ms cubic-bezier(0, 0.8, .9, 1);
    &:hover{
    color: yellow;
    transform: rotate(360deg)
    };
  `;

function Rest() {
  return (
    <Box>
      <Imgbox>
        <Img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      </Imgbox>
      <TextBr>
        <Title>Pollo Matón (Cumbres)</Title>
        <Des>This is a fake description of a restaurant that doesn't even exist but I need as an example for work porpuses.</Des>
      </TextBr>
      <SeeM><Arrow>➜</Arrow></SeeM>
    </Box>
  );
}

export default Rest;