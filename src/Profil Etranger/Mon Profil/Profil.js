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


import EditProfil from "../Edit Profil/EditProfil" ;
import Amis from "./ListeAmis/ListeAmis";


const Profil = () => {


    // const [theme, setTheme] = useState("Light");



   

    const [AffichageEdit , setAffichageEdit] = useState(false) ;
    const [AffichageAmis , setAffichageAmis] = useState(false)


    const [ListeContenuPublications , setListeContenuPublications] = useState([]) ;
    const [ListePublications , setListePublications] = useState([]) ;
    const [Test , setTest] = useState(false) ;
    const [User , setUser] = useState([])


    useEffect(() => {

        ;(async () => {
            const DocRef = doc(db,'Utilisateur','User_1') ;
            const SnapShot = await getDoc(DocRef) ;
            const User = SnapShot.data() 
            let ListPubs = SnapShot.data().ListePublication ;
            let ListeContenuPubs = []
            let i = ListPubs.length ;
            ListPubs.forEach(async(Element,Index) => {
                console.log(Element)
                let DocRef = doc(db,'Publication',Element) ;
                let SnapShot = await getDoc(DocRef) ;
                let DocRef_2 = doc(db,'ContenuPublication',SnapShot.data().ContenuPublication)
                let SnapShot_2 = await getDoc(DocRef_2) ;
                ListeContenuPubs.push(SnapShot_2.data())
                if(i = Index -1 && Test == false){
                    console.log(ListeContenuPubs) ;
                    setListeContenuPublications(ListeContenuPubs) ;
                    setListePublications(ListPubs) ;
                    setTest(true)
                    setUser(User) ;
                }
            });
            
            

   
                
       
           
            
   
           
           
        })()
    })







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
                                     {User.length == 0 ? '' : <img src={User.Image} /> }
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
                                User.length == 0 ? '' : User.Nom + ' ' + User.Prenom
                            } </h2>
                            <ul className="About">
                                <li><span> {
                                    User.length == 0 ? '' : User.ListePublication.length
                                }</span> Publications</li>
                                <li><span>{
                                    User.length == 0 ? '' : User.ListAmis.length
                                }</span> Amis</li>    
                            </ul>


                            <div className="Content">
                               {User.length == 0 ? '' : <p>
                               {User.Description}
                               </p>

                               }


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
