import React from "react";


import Image from './ImagePublication/Image 2.png' ;


const DemandesRejoindre = (props) => {
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
        Envoyer une demande de rejoindre 
        </span>
        </div>
        </div>
        <div className='Icons'>
        <span className="person-add-outline  ">
        <ion-icon name="add-outline"></ion-icon>
        </span>
        <span className="close-circle-outline ">
        <ion-icon name="ban-outline"></ion-icon>
        </span>
        </div>
        </li>


    );
}


export default DemandesRejoindre  ;