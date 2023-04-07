import React from 'react'
import "../../styles/googleLoginButton.css"

function GoogleLogin() {
  return (
    <>
     <button className="google-btn">
        <span className="google-icon"></span>
        <span className="google-text"><a className="google-text" href='https://conv.cyclic.app/api/auth/google'>Sign in with Google</a></span>
      </button>
    </>
  )
}

export default GoogleLogin