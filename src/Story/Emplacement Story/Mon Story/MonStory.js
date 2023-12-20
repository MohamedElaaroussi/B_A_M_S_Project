import React, { useState } from "react";
import "./MonStory.css";
import { useEffect } from "react";


import AjouterStory_2 from "../Ajouter Story/AjouterStory";

// ----------------- FIREBASE ----------------------

import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../../FireBase/config' ; 
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { storage } from  '../../../FireBase/config';
import { setUseProxies } from "immer";
import AjouterStory from "../Ajouter Story/AjouterStory";

import ImageP from './Image 7.png' ;
import { useSelector } from "react-redux";

const MonStory = () => {
  
  const [Show, setShow] = useState(false);
  const [UserStory , setUserStory] = useState([]) ;
  const [Test , setTest] = useState(false) ;
  const [Image , setImage] = useState('');
  const Status = useSelector(state => state)

  useEffect(() =>{
    let Val  = Status.OuvrireSession.Data.Image;
    setImage(Val) ;
     
  })

  return (
    <span>
    { Show ? <AjouterStory_2
      
      setShow = {setShow}
      /> : "" }
    <div onClick={() => { setShow(true)
    }} 
    
    className="Emplacement-Stories-2 fst-italic" id="VisibilityMonStory">
      <div className="Story-1 ">
        <div className="Emplacement-Stories-1">
       {
        Image == ''? <img className="ImageClasse " src={ImageP} />:  <img className="ImageClasse " src={Image} />
       }
          <svg className="Story-Border" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
         
        </div>
        <div className="add-outline">
        <ion-icon name="add-outline"></ion-icon>
        </div>
        <span className="User-Name-2"> Mon Status </span>
      </div>
    </div>
    </span>
  );
};

export default MonStory;
