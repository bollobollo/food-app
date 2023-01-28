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
  background: #FDC500;
  opacity: 100%;
  position: absolute;`;

const Nav_logo = styled.div`
  display: flex;
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
  transition: all 150ms ease-in-out;
  &:hover{
    color: white;
    text-shadow: .29vw .25vw 1px blue;
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
  transition: color 150ms ease-in-out;
  &:hover{
    color: white;
  }`;

const Nav_log = styled.div`
  margin-right: 4vw;
  cursor: pointer;
  transition: color 150ms ease-in-out;
  &:hover{
    color: white;
  }
  `;
  


function Navbar() {
    return (
      <Nav><Nav_logo>Food App</Nav_logo><Nav_user><Nav_reg>Register</Nav_reg><Nav_log>Log in</Nav_log></Nav_user></Nav>
    );
  }

export default Navbar;