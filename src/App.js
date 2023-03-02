import './App.css';
import Home1 from './home/home-view1.js';
import Home2 from './home/home-view2.js';
import Article1 from './article/article-view1';
import styled, {css} from "styled-components";
// import Ill from './home-illustration.js'

function App() {
  return (
    <div style={{boxSizing: "content-box", background: "transparent", width: "100%"}}>
      <Home1/>
      <Home2/>
    </div>
  );
}

export default App;