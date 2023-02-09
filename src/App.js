import './App.css';
import HView1 from './home/home-view1.js';
import HView2 from './home/home-view2.js';
import styled, {css} from "styled-components";
// import Ill from './home-illustration.js'

function App() {
  return (
    <div style={{boxSizing: "content-box", background: "transparent", width: "100%"}}>
      <HView1/>
      <HView2/>
    </div>
  );
}

export default App;