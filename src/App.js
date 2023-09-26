import './App.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import NavBar from "./navbar/NavBar"

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
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
