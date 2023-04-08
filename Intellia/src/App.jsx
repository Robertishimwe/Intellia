import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import LoginAuth from "./Pages/LoginAuth"
import LoginPage from "./Pages/LoginPage";
import UserDashBoard from "./Pages/UserDashBoard"
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path='/' element={<UserDashBoard />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/auth/:token'/>
    </Routes>
  );
}

export default App;
