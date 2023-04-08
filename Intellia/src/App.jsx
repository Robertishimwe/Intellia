import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './app/privateRoute';
import BounceRoute from './app/bounce';
import LoginAuth from "./Pages/LoginAuth"
import LoginPage from "./Pages/LoginPage";
import UserDashBoard from "./Pages/UserDashBoard"
import "./App.css";

function App() {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<UserDashBoard />} />
      </Route>
      <Route element={<BounceRoute />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/auth/:token' element={<LoginAuth />} />
      </Route>
    </Routes>
  );
}

export default App;
