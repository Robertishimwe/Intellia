import React from 'react'
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import { logginUser } from '../redux/features/auth/loginSlice';
import { loginMode } from '../redux/features/auth/isLoggedSlice';


function LoginAuth() {

    const dispatch = useDispatch();
    const { token } = useParams();
    
    const decoded = jwtDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('loggedUser', JSON.stringify(decoded))

    dispatch(logginUser(decoded));
    dispatch(loginMode());




    console.log(token)
  return (
    <div>Loading.........</div>
  )
}

export default LoginAuth