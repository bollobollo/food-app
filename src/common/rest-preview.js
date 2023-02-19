import styled, {css} from "styled-components";

const Rest = styled.a`
    width: 30%;
    min-width: 200px;
    height: 31%;
    min-height: 200px;
    margin: .7%;
    background: white;
    border-radius: 1vw;
    cursor: pointer;
    transition: width 500ms;
    transition-delay: 500ms;

    &:hover {
    width: 58%;
    animation: ${scale} 150ms cubic-bezier(0.1, 1.7, 1.0, 1.9) forwards;
    filter: contrast(150%) brightness(95%);
    box-shadow: .1em .2em 0px yellow; 
    animation-delay: 500ms;
  }
    `;