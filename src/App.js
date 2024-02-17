import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login")
  }, [])
  
  return (
   <>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   </>
  );
}

export default App;
