import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthPage from './Components/AuthPage';
import Profile from './Components/Profile';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{
  return(
    // <AuthPage />
    // // <Profile />
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<AuthPage />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        
       </Routes>
    </BrowserRouter>

  )
}

export default App