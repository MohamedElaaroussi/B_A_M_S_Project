import React from "react";



import Image from './ImagePublication/Image 2.png' ;

const DemandesRejoindreEnvoyer = (props) => {
    return(
        
        <li> 
        <div className="Profil">
        <div className='ImageProfil'>
        <img  src={Image} /> 
        </div>
        <div className='Name '>
        <span className="fw-bold">
        {props.name} :
        </span>
        <span className="ms-2">
        Accepter votre demande de rejoindre
        </span>
        </div>
        </div>
      
        </li>


    );
}


export default DemandesRejoindreEnvoyer  ;