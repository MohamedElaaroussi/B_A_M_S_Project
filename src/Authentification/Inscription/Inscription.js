import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';


//Redux
import { useDispatch } from "react-redux";
import ImageP from "./Image 7.png" ;

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS
import "./Inscription.css" ;


export default function SignUp(props) {


    let darkMode = localStorage.getItem('darkMode');

    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    const enableDarkMode = () => {
        // 1. Add the className to the body
        document.body.classList.add('darkmode');
        // 2. Update darkMode in localStorage
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        // 1. Remove the className from the body
        document.body.classList.remove('darkmode');
        // 2. Update darkMode in localStorage 
        localStorage.setItem('darkMode', null);
    }

    // If the User already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    //Navigating 
    const Navigate = useNavigate();

    //Information saisie
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');

    // array des utilisateurs importés du JSON
    const [Users, setUsers] = useState([]);

 
   
    const [Res , setRes] = useState(false)
    //Siging 
    const [isSigning, setIsSigning] = useState(false);

    //Email Verification



    const EmailValidation = () => {
        const EmailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

        if (EmailRegex.test(Email)) {
            return false ;
        }
        else {
            return true ;
        }
    }

    //Password Verification
    const PasswordVerification = () => {
        let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");

        if (pattern.test(Password)) {
           return false ;
        }
        else {
           return true ;
        }
    }

    //Password Confirmation
    const PasswordConfirmation = () => {
        if (Password === ConfPassword) {
            return false ;
      
        }
        else {
            return true ;
        }
    }

    const dispatch = useDispatch()

    // On Submit 
    const handleSubmit = (e) => {
        e.preventDefault();

     
     

        const EmailInvalid = EmailValidation();

        if (EmailInvalid) {
            toast.error('Email invalid', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


        const PasswordError = PasswordVerification();
        if (PasswordError) {
            toast.error('Password invalid', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        const ConfirmPasswordError = PasswordConfirmation();
        if (ConfirmPasswordError) {
            toast.error('Password non identiques', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

       
        if ( PasswordError == false && ConfirmPasswordError == false) {
            Axios.post("http://localhost:5000/VerEmail",{
                Email : Email ,
            }).then(res =>{
                console.log(res.data);
                if (res.data.Exest) {
                    toast.error('Email deja existe', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }else{
                    console.log("Done H")
                    const User = { Nom : Nom,Prenom : Prenom, Email : Email, MotDePasse : Password };
                   console.log(User) ;
                    dispatch({type:'CREER_UTILISATEUR',payload : User});
                    props.setAuth(false)
                }
                
            })
    
          



          
        }
    }

    let BamsImage = require("./Bams.png");


    return (
        <div className="Inscription">
            <div className="EmplacementInscription">

                <form onSubmit={handleSubmit} className="Form">
                    <h1  >Inscrivez-vous</h1>
                    <input type="text" placeholder="Prenom" required className="Champs" value={Nom} onChange={(e) => { setNom(e.target.value) }} />
                    <input type="text" placeholder="Nom" required className="Champs" value={Prenom} onChange={(e) => { setPrenom(e.target.value) }} />
                    <input type="Email" placeholder="Email" required className="Champs" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="Password" placeholder="Mot de passe" required className="Champs" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="Password" placeholder="Confirmer votre Mot de passe" required className="Champs" value={ConfPassword} onChange={(e) => { setConfPassword(e.target.value) }} />
                    <button type="submit" className="Submit">Sign Up</button>
        
                   <a onClick={() => props.setAuth(false)}> S'authentifier </a>
                </form>

               
            <ToastContainer style={{ fontSize:'small'}}
                position="bottom-left"
                autoClose={5000}
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
        </div>
    );
}
