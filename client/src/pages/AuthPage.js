import React, { useContext } from  'react';
import { AuthContext } from '../context/AuthContext';

export default function AuthPage(){
    const auth = useContext(AuthContext)

    return(
        <>
            <h1>
                USER PAGE
            </h1>
            <button onClick={() => {auth.logout(); window.location.href = "http://localhost:3000/account/login"}}> LOG OUT </button>
        </>
    )
}