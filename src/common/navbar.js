import styled, {css} from "styled-components";

const Nav_bg = styled.div`
  box-sizing: content-box;
  height: 6vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  max-height: 256px;
  min-height: 32px;
  background: #626262;
  opacity: 100%;
  position: absolute;`;
  

const Nav = styled.div`
  box-sizing: content-box;
  height: 7vh;
  width: 100vw;
  max-height: 256px;
  min-height: 32px;
  background: #414141;`;
  


function Navbar() {
    return (
      <Nav_bg/>
    );
  }

export default Navbar;