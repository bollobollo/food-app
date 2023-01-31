import styled, {css} from "styled-components";

const Nav = styled.div`
  display: flex;
  box-sizing: content-box;
  height: 6vh;
  width: 100%;
  max-width: 2000px;
  min-width: 800px;
  max-height: 256px;
  min-height: 32px;
  background: #F72585;
  opacity: 100%;
  position: absolute;`;

const Nav_logo = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 50%;
  max-height: 256px;
  min-height: 32px;
  font-weight: bold;
  font-size: 180%;
  padding-left: 4vw;
  cursor: pointer;
  color: white;
  text-shadow: .29vw .20vw 0px blue;
  -webkit-text-stroke: .5px black;
  transition: all 150ms ease-in-out;
  &:hover{
    color: blue;
    -webkit-text-stroke: .5px yellow;
    text-shadow: .29vw .25vw 1px white;
  }
  `;

const Nav_user = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: right;
  height: 100%;
  width: 50%;
  max-height: 256px;
  min-height: 32px;
  font-weight: bold;
  font-size: 140%;
  text-align: right;
  `;

const Nav_reg = styled.div`
  margin-right: 2vw;
  cursor: pointer;
  &:after {
    color: gold;
    content: '?';
  }
  color: white;
  -webkit-text-stroke: .1px #3C0CA3;
  transition: color 150ms ease-in-out;
  &:hover{
    color: #FFD500;
  }`;

const Nav_log = styled.div`
  margin-right: 4vw;
  cursor: pointer;
  color: white;
  transition: color 150ms ease-in-out;
  &:hover{
    color: blue;
  }
  `;
  


function Navbar() {
    return (
      <Nav><Nav_logo>Food App</Nav_logo><Nav_user><Nav_reg>sign up</Nav_reg><Nav_log>sign in</Nav_log></Nav_user></Nav>
    );
  }

export default Navbar;