import React, { useState } from "react";

import "./StoryAmis.css";

import mag1 from "./mag2.jpeg";



import Story from "../Story";

import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../../FireBase/config' ; 
// import { Firestore } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';


// import axios from 'axios' ;
import { storage } from  '../../../FireBase/config';


import { useEffect } from "react";
import { async } from "@firebase/util";

import { useSelector } from "react-redux";

const AllStory = () => {

  const [Info , setInfo] = useState([]);


  const [Test , setTest] = useState(false) ;

  const Status = useSelector(state => state)
  
  useEffect(() => {
    let Val  = Status.OuvrireSession.Id;
    console.log(Val);
    fetch('http://localhost:5000/Story/'+Val)
        .then(res => {
            return res.json();
        })
        .then(data => {
          console.log(data);
            setInfo(data)
        })
}, [])
      
  const $$ = document.querySelectorAll.bind(document);
  const $ = document.querySelector.bind(document);
  $$(".story").forEach((story) => {
    story.addEventListener("click", () => {
      let storyBorder = story.querySelector(".story-border");
      storyBorder.classList.add("active-story");

      setTimeout(() => {
        storyBorder.classList.remove("active-story");
      }, 10000);
    });
  });

 


  return (
    <main>
   
      <section>
        <div  className="StoryAmis fst-italic" id="visibilityOthersStory">


        {
              (Info.map((item)=>
                  <Story data = {item}  img={item.Utilisateur.Image} Nom={item.Utilisateur.Nom}/>
              ))
          }

        </div>
      </section>
    </main>
  );
};

export default AllStory;


// onClick={()=>{setAffiche(true)}
