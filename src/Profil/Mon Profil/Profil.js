import React from "react";


// ----------------- FIREBASE ----------------------

import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { storage } from  '../../FireBase/config';

// -------------------- CSS -------------------------------


import "./Profil.css"

// --------------------------------- STATE -------------------------------


import { useState } from "react";
import { useEffect } from "react";

//-------------------------------- Files ----------------------------------------

import { useSelector } from "react-redux";
import EditProfil from "../Edit Profil/EditProfil" ;
import Amis from "./ListeAmis/ListeAmis";
import Axios from "axios";

const Profil = () => {


    // const [theme, setTheme] = useState("Light");



   

    const [AffichageEdit , setAffichageEdit] = useState(false) ;
    const [AffichageAmis , setAffichageAmis] = useState(false)


    const [ListeContenuPublications , setListeContenuPublications] = useState([]) ;
    const [ListePublications , setListePublications] = useState([]) ;
    const [Test , setTest] = useState(false) ;
    const [User , setUser] = useState([])



    const Status_1 =  useSelector(state => state) ;
    
    useEffect(() => {

        
        if(Status_1.OuvrireSession.Data.ListePublication != 0){
            Axios.post("http://localhost:5000/ContenuPub",{
                        ListePublication : Status_1.OuvrireSession.Data.ListePublication ,
                    }
                    ).then(res =>{
                        console.log(res.data)
                        setListeContenuPublications(res.data);
                    });
                    // dispatch({type:'identify',payload:res.data})
                    
          
           }

   
                
       
           
            
   
           
           
      
    },[])







    return (
        <div >


    

            <div className="Profil">
            {AffichageEdit == true ? <EditProfil />:'' }
            {AffichageAmis == true? <Amis />: '' }
                <div className="Emplacement-Profil">

                    <div className="Header">
                
                        <div className="Emplacement-Image-Profil ">
                            <div className="Emplacement-Image-Profil-2 ">
                                <div className="Section">
                                    <div className="Wrapper">
                                    <div className="EmplacementImage2" >
                                     <div className="Image" onClick={() => setAffichageEdit(true) }>
                                     {User.length == 0 ? '' : <img src={Status_1.OuvrireSession.Data.Image} /> }
                                     <span className="add-circle-outline mb-4">
                                     <ion-icon name="add-circle-outline"></ion-icon>
                                     </span>
                                     </div>
                                </div>

                                    </div>
                                </div>




                            </div>
                         
    
                        </div>
                       

                      
                        <div className="Menu">


                            <h2 className="Nom mb-5"> {
                             Status_1.OuvrireSession.Data.Nom + ' ' + Status_1.OuvrireSession.Data.Prenom
                            } </h2>
                            <ul className="About">
                                <li><span> {
                                     Status_1.OuvrireSession.Data.ListePublication.length
                                }</span> Publications</li>
                                <li><span>{
                                    Status_1.OuvrireSession.Data.ListAmis.length
                                }</span> Amis</li>    
                            </ul>


                            <div className="Content">
                               <p>
                               {Status_1.OuvrireSession.Data.Description}
                               </p>

                               


                            </div>
                            <hr />
                        </div>

                    </div>

                    <div className="Right__col">

                        <nav>
                            <ul>
                                <li><a>photos</a></li>
                                <li><a>videos</a></li>
                                <li><a>groups</a></li>

                            </ul>

                        </nav>



                        <div className="Photos">
                        {
                            ListeContenuPublications.map((ContenuPub) => {
                                
                                
                                return(
                                    <div>
                                    <p>
                                    {ContenuPub.Contenu}
                                    </p>
                                    <img src={ContenuPub.Image}  alt="Photo"/>
                                    <br/>
                                    </div>
                                    
                                    
                                );
                            })
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>








    )
}
export default Profil;
