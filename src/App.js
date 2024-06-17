import styled, { ThemeProvider } from 'styled-components';
import './App.css';
// import Home from "./componenets/Home/Home"
import {
  BrowserRouter as Router,
//   Routes,
//   Route
} from "react-router-dom";
// import Header from './componenets/header/Header';
import darkTheme from "./utils/Themes";
import Navbar from './componenets/Navbar';
import Hero from './componenets/sections/Hero';
import Skills from './componenets/sections/Skills';
import Experience from './componenets/sections/Experience';
import Practice from './componenets/sections/Practice';
import Education from './componenets/sections/Education'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Skills/>
        <Experience/>
        <Education/>
        <Practice/>
      </Body>
    </Router>
  </ThemeProvider>
}

export default App;
