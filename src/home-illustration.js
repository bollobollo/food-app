import styled from "styled-components";

const Main = styled.div`
    width: 1312px;
    height: 928px;
    display: flex;
    flex-direction: row;
    border: 25px black solid;`;


const Frame1 = styled.img`
    width: 640px;
    height: 928px;
    background-color: #3d3d3d; 
    `;

const Frame2 = styled.img`
    width: 640px;
    height: 544px;
    background-color: #D9D9D9; 
    `;

const Frame3 = styled.img`
    width: 640px;
    height: 100px;
    background-color: #D9D9D9; 
    `;

function Ill (props) {
    return(
        <Main>
            <Frame1/>
            <Frame2/>
            <Frame3/>
        </Main>
    )
}

export default Ill