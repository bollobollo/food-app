import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 1312px;
    height: 928px;
    border: 25px black solid;
    align-items: center;
    justify-content: center;`;


const Frame1 = styled.div`
    width: 640px;
    height: 928px;
    background-color: #3d3d3d;
    margin-right: 32px;`;

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
        <Wrapper>
            <Frame1/>
            <Frame2/>
            <Frame3/>
        </Wrapper>
    )
}

export default Ill