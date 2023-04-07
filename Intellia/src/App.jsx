import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import UserDashBoard from "./Pages/UserDashBoard"
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <LoginPage /> */}
      <UserDashBoard/>
    </div>
  );
}

export default App;
