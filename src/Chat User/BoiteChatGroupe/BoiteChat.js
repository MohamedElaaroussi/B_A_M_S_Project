


import React,{useState,useEffect} from "react";


import './BoiteChat.css' ;

import {collection , addDoc,getDocs, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 

import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { async } from "@firebase/util";

import Messages from "./Messages";

// import axios from 'axios' ;import { storage } from '../../FireBase/config';












const BoiteChat = (props) => {

    const [Message , setMessage] = useState('');
    const [ListMessagesContenu , setListMessagesContenu ]= useState([]) ;
    const [ListMessages , setListMessages ]= useState([]) ;
    const [Test, setTest] = useState(false);
    // const [ListData , setListData] = useState([]);
 
    useEffect(() => {
       ;(async () => {

           const DocRef = doc(db,'GroupeChat',props.Groupe.id);
           const snapShot = await getDoc(DocRef);
           let ListMessages_2 = [] ;


           if(Test == false){
            setListMessagesContenu(snapShot.data().Messages)
           }

      

       
          
           
 
          
          
       })()
   },[props.Groupe.id] )
 
 




    const EnvoyerMessage = () => {

        console.log('=>> -------- 01 --------------- <<=') ;
        
        let IdMessageChatGroupe = 'MessageGroupe_' + Math.random()*100 ;
        console.log('=>> -------- 001 --------------- <<=') ;

        setDoc(doc(db,'MessageChatGroupe',IdMessageChatGroupe),{
            Contenu: Message ,
            Membre: 'User_1' ,
            TempsMessage: new Date() ,

        }) ;
        console.log('=>> -------- 02 --------------- <<=') ;

        let GroupeId = props.Groupe.id ;
        console.log('=>> -------- 002 --------------- <<=') ;


        updateDoc(doc(db,'GroupeChat',GroupeId),{
            Messages: arrayUnion(IdMessageChatGroupe) ,
        })

        let Val = ListMessagesContenu ;
        Val.push(IdMessageChatGroupe)
       setListMessagesContenu(Val) ;
       setMessage('');


    }


   
        
         
    

    return (
        <div className='BoiteChat container p-4'>


            <div className='BoiteChat_2 m-5 pe-2 pb-3'>
            <div className='cancel-btn1' onClick={() =>  props.Change_Dis(false) }  ><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>    
           
            <div className="Header">
            <hr />
               
                    <div >
                        <div className="Profil">
                            <div className='ImageProfil'>
                                <img src={props.Groupe.ImageDeGroupe} />
                            </div>
                            <div className='Name '>
                                <span className="fw-bold mt-3">
                                   {props.Groupe.NomGroupe} 
                                </span>
                            </div>
                        </div>

                    </div>

                    <hr />
                </div>
              
             
                <div className="wrapper">

              
               {ListMessagesContenu.map((Message) => <Messages Message = {Message} />) }
                        
               

                
                     

                
                            
                    
        
                
             </div>

                <hr />
                <div >
                    <div className='d-flex ms-5 mt-3'>
                        <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Ecrire Votre Message ici ...'

                            className='form-control w-75 ms-3'></textarea>
                        <button className='Envoyer-button mt-4 ms-4  '  onClick={EnvoyerMessage}><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button>

                    </div>

                </div>

            </div>

        </div>
    )
}



export default BoiteChat;