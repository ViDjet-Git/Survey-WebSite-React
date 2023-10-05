import './App.css';
import {Routes, Route, BrowserRouter, useLocation} from "react-router-dom";
import $ from "jquery"
import NavBar from "./navbar/NavBar"
import Home from "./main-content/Home"
import Profile from "./main-content/Profile"
import Info from "./main-content/Info"
import Vote from "./main-content/Vote"
import Create from "./main-content/Create"
import Register from "./main-content/Register"
import SignIn from "./main-content/SignIn"
import { useState } from 'react';
import * as React from 'react';

function Empty() {
  return ;
}

function App() {
  const [log, setLog] = useState();
  //console.log("LOG: " + log);
  let location = useLocation();
  React.useEffect(() => {
    //let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)PHPSESSID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //console.log("CHANGED:" + cookieValue);
    if(checkLogin()){
      //console.log("INSIDE IF CHECKOUT TRUE" + checkLogin());
      setLog(true);
    } else {
      //console.log("INSIDE IF CHECKOUT FALSE" + checkLogin());
      setLog(false);
    }
  }, [location]);
  
  function getInfo(name) {	//get info(email, username, gender, birthday or user ID) from $_SESSION php
		var obj;
		$.ajax({
			async: false,
      type: "POST",
      url: "http://localhost:8000/getInfo.php",
			data: {"name": name},
			xhrFields: {
			withCredentials: true
			},
      success: function(data) {
        obj = JSON.parse(data);
				if(obj.error){
					console.log(obj.error);
				}
      },
    });
		return obj.success;
	}

  const checkLogin = () => {
    var result;
    $.ajax({
      type: "POST",
      async: false,
      url: "http://localhost:8000/check_session.php",
      dataType: 'text',
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        //console.log("DATA from checkLogin: " + data);
        if(data * 1){
          console.log("LOGGED IN!!!!");
          result = true;
        } else {
          result = false;
        }
      },
    });
    return result;
  };

  return (
    <div>
    <Routes> 
      <Route path="/" element={<NavBar loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/profile" element={<NavBar loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/info" element={<NavBar loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/vote" element={<NavBar loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/create" element={<NavBar loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/register" element={<Empty />}></Route>
      <Route path="/sign_in" element={<Empty />}></Route>
    </Routes>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile loged={{log}} getInfo={getInfo}/>}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/vote" element={<Vote />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/sign_in" element={<SignIn />}></Route>
    </Routes>
    </div>
  );
}

export default App;
