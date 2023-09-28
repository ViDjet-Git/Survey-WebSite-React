import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./navbar/NavBar"
import Home from "./main-content/Home"
import Profile from "./main-content/Profile"
import Info from "./main-content/Info"

function Empty() {
  return ;
}

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<NavBar />}></Route>
      <Route path="/profile" element={<NavBar />}></Route>
      <Route path="/info" element={<NavBar />}></Route>
    </Routes>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/info" element={<Info />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
