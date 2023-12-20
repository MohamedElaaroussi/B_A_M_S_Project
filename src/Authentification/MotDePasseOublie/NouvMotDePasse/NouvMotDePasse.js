import React from "react";

import { useState } from "react"
import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

//toastify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS

// import "./NouvMotDePasse.css " ;
import { useNavigate } from "react-router-dom";
 
//Redux
import { useSelector, useDispatch } from "react-redux";

import Axios from "axios" ;


function NouvMotDePasse(props) {



    

    

    
 
    const [NouvMotDePasse , setNouvMotDePasse] = useState('') ;
    const [ConNouvMotDePasse , setConNouvMotDePasse] = useState('') ;
    const Navigate = useNavigate() ;

   
    

    const handleSubmit = async(e) => {
        
        e.preventDefault();


        if(NouvMotDePasse != ConNouvMotDePasse){
            toast.error("Error ... ", {
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
            Axios.post("http://localhost:5000/NouvMotDePasse",{
            NouvMotDePasse : NouvMotDePasse ,
            Id : props.Id ,
        }).then(res =>{
            Navigate('/');
        })

        }
        


     

    }
       
          
            
       
        
    


    return (
        <div className="EmailVerification">
            <div className="EmplacementEmailVerification">
                <form onSubmit={handleSubmit} className="Form">

                    <h1 className="fst-italic">Trouver votre mot de passe </h1>
                    <input type="text" className="mt-5" name="Code" placeholder="Entrer nouveau mot de passe"  onChange={(e) => {setNouvMotDePasse(e.target.value)} } required />
                    
                    <input type="text" className="" name="Code" placeholder="Confirmer nouveau mot de passe"  onChange={(e) => {setConNouvMotDePasse(e.target.value)} } required />
                    <div className="mt-3 d-flex flex-column">
                    <button type="submit" className="Submit  fst-italic" >Confirmer</button>
                   
                  
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


export default  NouvMotDePasse ;
