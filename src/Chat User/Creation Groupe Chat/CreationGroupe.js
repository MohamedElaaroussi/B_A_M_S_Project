import React from "react";
import "./CreationGroupe.css"

import { useState } from "react";


import Section from "./Section";

import Section2 from "./Section2";
import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 
// import { Firestore } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { storage } from  '../../FireBase/config';







const CreationGroupe = () => {
    
    const [LienImage , setLienImage_1] = useState([]);
    const [NomGroupe , setNomGroupe] = useState()
    const [AutrePage , setAutrePage] = useState(false) ;
    const [DescriptionGroupe ,setDescriptionGroupe] = useState();
    const [Url , setUrl] = useState();
    const [Ref , setRef] = useState() ;
    const [Liste_Chacked,setChackedListe] = useState([]);
    const [IdGroupeChat_2, setIdGroupeChat ] = useState();
    
    const ValiderCreation = () => {



      if(AutrePage == false){
        const IdGroupeChat = "GroupeChat " + Math.random()*100 ; 
        setIdGroupeChat(IdGroupeChat) ;
        const LinkImageProfilGroupe = "Groupe/ GroupeChat / " + IdGroupeChat + " / Profil / ProfilGroupe " + Math.random()*1000 ;

    
        
        const imageRef = ref(storage, LinkImageProfilGroupe);

        console.log('imageRef => :' + imageRef) ;
        
        setRef(imageRef) ;
        uploadBytes(imageRef, LienImage).then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              console.log(url) ;
              setUrl(url);
              EnregistrerValidation(url,IdGroupeChat)
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });

        })
        .catch((error) => {
          console.log(error.message);
        });
      
       const EnregistrerValidation = (url , IdGroupeChat) => {
        setDoc(doc(db,"GroupeChat",IdGroupeChat),
        {NomGroupe : NomGroupe ,
        DescriptionGroupe : DescriptionGroupe ,
        ImageDeGroupe : url ,
            }
        )
       } 
       setAutrePage(true) ;

      }else{
        
        const ListeMembreDeGroupe = [] ;

        Liste_Chacked.forEach(User => {
          if(User.Chacked == true){
            ListeMembreDeGroupe.push(User.id) ;
          }
        });

        console.log(ListeMembreDeGroupe);



        updateDoc(doc(db,"GroupeChat",IdGroupeChat_2),
        {
          Admin : 'User_1' ,
          ListeDesMembre : ListeMembreDeGroupe ,
          Messages : [] ,

        }
        )

        ListeMembreDeGroupe.push('User_1');
        ListeMembreDeGroupe.forEach(Membre => {
          updateDoc(doc(db,'Utilisateur',Membre),
          {
            ListGroupeChat : arrayUnion(IdGroupeChat_2)
          }
          )
        })

      }
        


    }
    return(
        <div className="CreationGroupeChat fst-italic">
        <div className="EmplacementCreationGroupe m-1 pt-1 rounded-3">
        <div className="Header">
       
        <div className="Titre ms-4 ">
        <h3>
        Créer un groupe de chat  : 
        </h3>
        </div> 
        </div>
        <hr />
        
        { AutrePage ? <Section2 
          
          setChackedListe = {setChackedListe}
          Liste_Chacked = {Liste_Chacked}
          
          /> : <Section 
        
        setNomGroupe = {setNomGroupe}
        setDescriptionGroupe = {setDescriptionGroupe}
        setLienImage_1 = {setLienImage_1}

        /> }

        <hr />
        <div className="footer">
        <div className="Envoyer">
       
        <button className='Envoyer-button' onClick={ValiderCreation}><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button> 
        
        </div> 
        </div>
        </div>
        </div>
    );
}


export default CreationGroupe ;