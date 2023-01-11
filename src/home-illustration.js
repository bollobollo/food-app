import styled from "styled-components";

const Main = styled.div`
    width: 1312px;
    height: 928px;
    display: flex;
    flex-flow: column wrap;
    border: 25px black solid;`;


const Frame1 = styled.div`
    width: 640px;
    height: 928px;
    background-color: #3d3d3d;
    margin-right: 32px; 
    `;

const Frame2 = styled.div`
    width: 640px;
    height: 544px;
    background-color: #D9D9D9; 
    `;

const Frame3 = styled.div`
    width: 640px;
    height: 352px;
    background-color: #D0D0D0;
    margin-top: 32px;
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