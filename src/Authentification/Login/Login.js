import React from "react";

import { useState } from "react"
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

//toastify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS

import "./Login.css" ;

//Redux
import { useSelector, useDispatch } from "react-redux";


import Axios from "axios" ;


export default function Login(props) {




    const [Email, setEmail] = useState('');
    const [MotDePasse, setPassword] = useState('');
    const [isLogingIn, setIsLogingIn] = useState(false);
    const [Error, setError] = useState(false);
 

    const Navigate = useNavigate();
    const dispatch = useDispatch() ;
    const logedIn = useSelector(state => state.logedIn);

    const handleSubmit = async(e) => {
        
        e.preventDefault();

        Axios.post("http://localhost:5000/User",{
            Email : Email ,
            MotDePasse : MotDePasse ,
        }).then(res =>{

            console.log(res.data);
               

            if (res.data != '' ) {
                dispatch({type:'logIn'})
              
                dispatch({type:"SESSION",payload:res.data})
                             // dispatch({type:'identify',payload:res.data})
                
               console.log(logedIn);
                Navigate("/Accueil")
            }
            else {
                setError(true);
            }
    }

        )
        if (Error) {
            toast.error('Email ou password invalide', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
       
   
    }

   
   
    }


    return (
        <div className="Login">
            <div className="EmplacementLogin">
                <form onSubmit={handleSubmit} className="Form">

                    <h1><span className="White">L</span><span>O</span>G<span>I</span>N</h1>
                    <input type="text" name="Email" placeholder="Email" required value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" name="MotDePasse" placeholder="Mot de passe" required value={MotDePasse} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" className="Submit" >S'authentifier</button>
                  
                    <a onClick={() => props.setAuth(true)} > Vous n’avez pas de compte ? </a>
                 
                    

                    <a href="/chercher/motdepasse">Mot de passe Oublié ?</a>
                </form>         
            </div>
            <ToastContainer style={{ fontSize: 'small' }}
                position="bottom-left"
                autoClose={5000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}


