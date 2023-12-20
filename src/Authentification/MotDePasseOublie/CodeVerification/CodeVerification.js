import React from "react";

import { useState } from "react"
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

//toastify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS

import "./CodeVerification.css" ;
 
//Redux
import { useSelector, useDispatch } from "react-redux";

import Axios from "axios" ;


function CodeVerification(props) {



    

    

    
 
    const [Code, setCode] = useState('');

    

   
    

    const handleSubmit = async(e) => {
        
        e.preventDefault();

        Axios.post("http://localhost:5000/ConfirmeCode",{
            Code : Code ,
            Id : props.Id
        }).then(res =>{
            console.log(res.data) ;
            if(res.data.Ver == false){
                toast.error("Error de code n'existe pas ... ", {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    className: "fst-italic"
                
                });
            }else{
                props.setT(2);
                // props.setCode_G(res.data.Id) ;
                // props.setEmail_G(Email) ;
                
            }
        })


     

    }
       
          
            
       
        
    


    return (
        <div className="EmailVerification">
            <div className="EmplacementEmailVerification">
                <form onSubmit={handleSubmit} className="Form">

                    <h1 className="fst-italic">Trouver votre mot de passe </h1>
                    <input type="text" className="mt-5" name="Code" placeholder="Entrer le code de verification"  onChange={(e) => {setCode(e.target.value)} } required  />
                    <div className="mt-5 d-flex flex-column">
                    <button type="submit" className="Submit mt-5 fst-italic" >Confirmer</button>
                   
                  
                    <a href="/" className="fst-italic">
                    Annuler ?
                    </a>
                   
                    </div>
                    
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


export default  CodeVerification ;
