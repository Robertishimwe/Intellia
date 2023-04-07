import React from "react";
import "../styles/googleLoginButton.css"

function LoginPage() {
  return (
    <>
      <button class="google-btn">
        <span class="google-icon"></span>
        <span class="google-text">Sign in with Google</span>
      </button>
    </>
  );
}

export default LoginPage;
