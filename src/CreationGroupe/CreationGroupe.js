import React from "react";
import "./CreationGroupe.css"
import { useState } from "react";
import Section from "./Section";


import Section2 from "./Section2";


const CreationGroupe = () => {
    
  
   
    return(
        <div className="CreationGroupe fst-italic p-5">
        <div className="EmplacementCreationGroupe m-1 pt-1 rounded-3">
        <div className="Header">
        <div className="Titre m-4 ">
        <h3>
        Créer un groupe :
        </h3>
        </div> 
        </div>
        <hr />
        <Section2 />
       
        <hr />
        <div className="footer">
        <div className="Envoyer">
       
        <button className='Envoyer-button '><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button> 
        
        </div> 
        </div>
        </div>
        </div>
    );
}


export default CreationGroupe ;