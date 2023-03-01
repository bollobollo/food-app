import styled, {css, keyframes} from "styled-components";
import Nav from '../common/navbar.js';

const Wrapper = styled.div`
  // Dimensiones de la caja
  box-sizing: content-box;
  height: 92vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  padding-top: 7vh;
  padding-left: 4vw;
  padding-right: 4vw;`;

function AView1() {
    return (
      <div style={{boxSizing: "content-box", height: "100vh", width: "100%", minWidth: "100px", display: "flex", background: "#3C0CA3"}}>
        <Nav/>
        <Wrapper className="App" style={{}}></Wrapper>
      </div>
    );
  }
  
export default AView1;