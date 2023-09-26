import './App.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import NavBar from "./navbar/NavBar"
import Home from "./main-content/Home"

function Empty() {
  return ;
}

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<NavBar />}></Route>
    </Routes>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
