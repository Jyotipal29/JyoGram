import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { useEffect } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <div id="signInDiv"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
