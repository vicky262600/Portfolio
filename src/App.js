import { ThemeProvider } from 'styled-components';
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

function App() {
  return <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar/>
    </Router>
  </ThemeProvider>
}

export default App;
