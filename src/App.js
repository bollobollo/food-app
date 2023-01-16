import './App.css';
import Ill from './home-illustration.js'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  `;

function App() {
  return (
    <Wrapper className="App">
      <Ill/>
    </Wrapper>
  );
}

export default App;
