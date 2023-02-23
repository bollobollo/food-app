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
  }
    `;

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

const Title = styled.div`
  background: yellow;
  margin-left: 1.5%;
  padding-top: .8%;
  padding-left: 1%;
  border-radius: 0 1vw 1vw 0;
  border: black solid 1px;
  text-align: center;
  font-weight: bold;
  font-size: clamp(.5rem, 1.7rem, 5rem);
  color: black;
  grid-column: 5 / 9;
  grid-row: 1 / 8;
  `;

function Rest() {
  return (
    <Box>
      <Imgbox>
        <Img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      </Imgbox>
      <Title>Pollo Poyo</Title>
    </Box>
  );
}

export default Rest;