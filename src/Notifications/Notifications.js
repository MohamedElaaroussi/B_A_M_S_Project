import React from 'react' ;
import { useEffect } from 'react';
import DemandesInvitation from './DemandesInvitation/DemandesInvitation';
import DemandesRejoindreEnvoyer from './DemandesRejoindreEnvoyer/DemandesRejoindreEnvoyer';
import DemandesRejoindre from './DemandesRejoindre/DemandesRejoindre';
import './Notifications.css' ;

import {collection , addDoc,getDocs, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../FireBase/config' ; 

import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { async } from "@firebase/util";




const Notifications = () => {



    useEffect(() => {
        ;(async () =>{
            const DocRefInvitationsRecu = doc(db,'Utilisateur','User_1');
            const snapShotInvitationsRecu = await getDoc(DocRefInvitationsRecu);
            // const DocRefDemandesRejoindreEnvoyer = doc(db,'')
        })()
    })



    
    const Suggestions = [
      
        "Elkaouri aissame",
        "Adam Benson", 
        "Clare Donaldson",
        "Ben Adams",
        "Donald Clarkson"
    
    
     ];

     const Suggestions2 = [
      
        "Elkaouri aissame",
        "Adam Benson",
        "Clare Donaldson",
        "Ben Adams",
        "Donald Clarkson"
    
    
     ];

     const Suggestions3 = [
      
        "Elkaouri aissame",
        "Adam Benson",
        "Clare Donaldson",
        "Ben Adams",
        "Donald Clarkson"
       
    
     ];


    
    
    return(
        
        <div className='Notifications fst-italic p-5'>
        <div className='EmplacementNotifications  pt-1 rounded-3'>

        <div className='Header'>
        <div className='Titre m-4'>
        <h3>
        Notifications
        </h3>
        </div>
        </div>
        <hr />
        <div className='autocom-box'>
        {Suggestions.map((name) => 
            <DemandesInvitation name = {name} />
        ) }

        {
            Suggestions2.map((name) => 
            <DemandesRejoindreEnvoyer name={name} />)
        }

        {
            Suggestions3.map((name) => 
            <DemandesRejoindre name = {name} /> )
        }

        </div>
        
        


        </div>
        </div>
    
        );
}



export default Notifications ;