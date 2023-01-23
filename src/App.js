import './App.css';
import HView1 from './home/home-view1.js';
import Nav from './common/navbar.js';
import styled, {css} from "styled-components";
// import Ill from './home-illustration.js'

function App() {
  return (
    <div style={{background: "#3C0CA3", width: "100vw"}}>
      <HView1/>
    </div>
  );
}

export default App;