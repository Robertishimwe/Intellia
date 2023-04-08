import React from 'react'
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';


function LoginAuth() {
    const { token } = useParams();
    console.log(token)
  return (
    <div>LoginAuth</div>
  )
}

export default LoginAuth