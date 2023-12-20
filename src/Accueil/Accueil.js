import React, { useState , useEffect } from "react";

import Menu from '../Menu/Menu';

import Chat from '../Chat User/Chat';
import PublicationImage from "../Publication/PublicationImage/PublicationImage";
import PublicationVideo from "../Publication/PublicationVideo/PublicationVideo";
// import AjouterPublication from "../createPost/AjouterPublication";
// import Publication from "../Comments/Publication";
// import PublicationVideo from "../Comments/PublicationVideo";
// import CreationGroupe from "../creatGroup/CreationGroupe/CreationGroupe";

import './Accueil.css'
import AjouterPublication from '../AjouterPublication/AjouterPublication';
import Commentaire from "../Commentaire/PublicationD";
import Notification from "../Notifications/Notifications";
import Recherche from '../Recherche/Recherche';

import Story from "../Story/Story";

import Profil from "../Profil/Mon Profil/Profil";

import CreationGroupe from '../CreationGroupe/CreationGroupe';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux";
// import { useDispatch } from "react-redux";
import AmisCommuns from "../PersonneRecommander/PersonnesRecommander" ;

import Axios  from "axios";
import ProfilEtr from "../Profil Etranger/Mon Etranger/Profil";

import Chargement from "../Chargement/Chargement";

export default function Home () {

    
    

    const Dispatch = useDispatch();
    const Navigate_2 = useNavigate() ; 

    useEffect(() => {
    
       
        if(Status.logedIn == true){
            Navigate_2('/');
        }

      
    })

    const Status = useSelector(state => state)

    console.log(Status);
   
    let Val = Status.OuvrireSession

   
    
    const [Charger, setCharger] = useState(true);
    return (
       Status.logedIn == true? '' :  <div className="Accueil row">

       <Menu />


       {Status.Profil ? <Profil /> : Status.ProfilEtranger.show ? <ProfilEtr /> :  <div className="EmplacementAccueil col">
          
       {Charger? <div className="Chargement_w"><Chargement /></div>  : ''}
       <PublicationImage Charger={Charger} MCharger={setCharger} />
           <PublicationVideo />

           {Status.post ? <AjouterPublication /> : ''}
           {Status.comment.show ? <Commentaire /> : ''}
           {Status.groupCreate ? <CreationGroupe /> : ''}
           {Status.Chat ? <Chat /> : ''}
           {Status.Notification ? <Notification /> : ''}
           {Status.Recherche ? <Recherche /> : ''}
           
       </div>

}

{Charger? '' : Status.Profil ? '' : Status.ProfilEtranger.show? '' : <div className="Story col">
<Story />
</div> }
       
       


   </div>
    )
}