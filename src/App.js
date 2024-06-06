import './App.css';
import Home from "./componenets/Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './componenets/header/Header';

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/' element={<Header/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
