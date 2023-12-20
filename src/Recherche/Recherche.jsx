import React from 'react' ;

// import './Recherhe.css' ;
import './Recherche.css' ;
import { useState } from 'react';
import {db} from '../FireBase/config' ; 
import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , getDocs}  from "firebase/firestore" ;
import { async } from '@firebase/util';
import { useEffect } from 'react';
import  Axios  from 'axios';
import ImageP from "./Image 7.png";

import { useDispatch } from 'react-redux';
const Recherche =  () => {

   const [ListUsers , setListeUsers ]= useState([]) ;
   const [Test, setTest] = useState(false);
   const [ListData_2 , setListData_2] = useState([]);
   const [ListData , setListData] = useState([]);

   
 const Dispatch = useDispatch();



const Search = (e) => {
       if(e.target.value == ''){
         setListData_2([]);
       }else{
        Axios.get("http://localhost:5000/Utilisateur/" + e.target.value ).then(res =>{
          console.log(res.data);
          setListData_2(res.data)
  }

      )
       }
    
      }


  

   
   return (
    <div className='Recherche p-5'>
    <div className='p-1 EmplacementRecherche rounded-3'>
    <div className='wrapper m-2 '>
    <div className='titreRecherche'>
    <h3 className='m-2'>
    Recherche
    </h3>
    </div>
    <div className='search-input mt-5'>
    <input 
    type='text'
    className='form-control border border-4 rounded-pill px-3' 
    placeholder='Type to search ...'
    onChange={Search}
    />
    <hr className='mt-5' />
    <div className='autocom-box mt-5'>
    {ListData_2.map((User) => {
      return(
        <li >
        <div className="Profil" onClick={() => {Dispatch({type : "AFFICHER_PROFIL_ET" , payload : User}) }}>
            <div className='ImageProfil'>
               {User.Image == ''? <img src={ImageP} /> : <img src={User.Image} /> } 
            </div>
            <div className='Name '>
                <span className="fw-bold">
                    {User.Nom} {User.Prenom} 
                </span>
            </div>
        </div>

    </li>

      );
    } )}
    </div>
    <div className='search-outline me-2'> <ion-icon name="search-outline"></ion-icon> </div>
    </div>
    
    </div>

    </div>    
    </div>
   );
}


export default Recherche ;