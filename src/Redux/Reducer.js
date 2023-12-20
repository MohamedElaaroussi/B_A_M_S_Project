import { combineReducers } from "redux";


import Axios from 'axios' ;
import ImageP from './Image 7.png' ;

import { useNavigate } from "react-router-dom";
import React  from 'react';
import { useState } from 'react';
import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../FireBase/config' ; 
// import { Firestore } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';


// import Axios from 'axios';
// import axios from 'axios' ;
import { storage } from  '../FireBase/config';

// import Menu from './Menu/Menu' ;
import { useDispatch } from 'react-redux';







const OuvrireSessionReducer =(state = {},action) => {
  if(action.type == "SESSION"){
    state = action.payload
  }

  return state ;


}




const ProfilEtrangerReducer = (state = {show: false , Donne: {}}, action) => {
    if(action.type == "AFFICHER_PROFIL_ET"){
        state = {...state ,
            show:!state.show , 
          Donne : action.payload}
      }

      return state ;
    
}

const LogedInReducer = (state = true, action)=>{
   
    switch (action.type) {
        case "logIn":
            state = !state
            
        case "logOut" : 
            state = false        
    }
    console.log(state);
    return state
}



const AccueilReducer = (state = false, action)=>{
   
   if(action.type == "ACCUEIL"){
    state = !state
   }
    return state
}


const signedUpReducer = (state=false , action)=>{
    switch (action.type)
    {
        case "signUp":
            state = true ;
    }
    return state
}

const userReducer = (state={} , action)=>{
    switch (action.type)
    {
        case 'identify':
            state = action.payload
        case 'quit':
            state = {}
    }
    return state
}

const popupPostCreateReducer = (state=false , action)=>{
    switch(action.type)
    {
        case 'visibile':
            state = !state
    }
    return state
}

const groupCreateReducer = (state=false , action )=>{
    switch(action.type)
    {
        case 'createVisibility':
            state = !state
    }
    return state
}


const commentReducer = (state = {show: false , Publication:''} , action)=>{
    switch(action.type)
    {
        case 'commentvisibile':
            
            state = {...state ,
                show:!state.show , 
                Publication : action.payload}
           
    }
    return state
}

const videoCommentReducer = (state={show:false , videosrc:''} , action)=>{
    switch(action.type)
    {
        case 'videocommentvisibile':
            state = {...state , show:!state.show , videosrc:action.payload}
    }
    return state
}

const RechercherReducer = (state =  false, action)=>{
    switch(action.type)
    {
        case 'RECHERCHE':
            
            state = !state ;
    }
    return state
}


const ChatReducer = (state = false , action) => {
    switch(action.type)
    {
        case 'CHAT' :
            state = !state ;
    }
    return state ;
}


const NotificationReducer = (state = false , action) => {
    switch(action.type)
    {
        case 'NOTIFICATION' :
            state = !state ;
    }
    return state ;
}


const ProfilReducer = (state = false , action) => {
    switch(action.type)
    {
        case 'PROFIL' :
            state = !state ;
    }
    return state ;
}


const ChargementReducer = (state = false , action) => {
    
    
    if(action.type == 'EN_CHARGEMENT' ){
        state = true ;
    }else if(action.type == 'CHARGER'){
        state = false ;
    }
   
    
    return state ;

}






const Creation_Utilisateur_Reducer = (state = {User : [],
Exest : false
} , action) => {
    

    if(action.type == 'CREER_UTILISATEUR' ){



        let IdUtilisateur = " " + Math.random()*10 ;
            
              Axios.post("http://localhost:5000/CreateUser",{
                Id : IdUtilisateur ,
                Nom : action.payload.Nom ,
                Prenom : action.payload.Prenom ,
                Email : action.payload.Email ,
                MotDePasse : action.payload.MotDePasse,
                
    }).then(res =>{
       console.log(res)

      
}

    )
        state.Exest = true ;
    }else if(action.type == 'CHARGER'){
        state.Exest = false ;
    }
   
    
    return state ;


}

const reducer = combineReducers({
    Creer_Utilisateur : Creation_Utilisateur_Reducer ,
    logedIn :LogedInReducer ,
    signedIn :signedUpReducer,
    user : userReducer,
    post : popupPostCreateReducer,
    comment : commentReducer,
    videocomment : videoCommentReducer,
    groupCreate : groupCreateReducer ,
    Recherche : RechercherReducer ,
    Chat : ChatReducer ,
    Notification : NotificationReducer , 
    Profil : ProfilReducer ,
    Chargement : ChargementReducer ,
    OuvrireSession : OuvrireSessionReducer ,
    ProfilEtranger : ProfilEtrangerReducer ,
    Accueil : AccueilReducer ,
})
export default reducer 