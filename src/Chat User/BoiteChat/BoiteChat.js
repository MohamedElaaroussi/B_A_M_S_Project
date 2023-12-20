


import React,{useState,useEffect} from "react";

import EnvoieImage from './EnvoieImage/EnvoieImage' ;
import './BoiteChat.css' ;

import {collection , addDoc,getDocs, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 

import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { async } from "@firebase/util";

import Messages from "./Messages";

// import axios from 'axios' ;import { storage } from '../../FireBase/config';






import { useSelector } from "react-redux";





const BoiteChat = (props) => {

    const [Message , setMessage] = useState('');
    const [ListMessagesContenu , setListMessagesContenu ]= useState([]) ;
    const [ListMessages , setListMessages ]= useState([]) ;
    const [Test, setTest] = useState(false);
    // const [ListData , setListData] = useState([]);
    const Status = useSelector((state) => state)
    useEffect(() => {
       ;(async () => {


            const DocRef = collection(db,'Chat');
           const snapShot = await getDocs(DocRef);
           let ListMessages_2 = [] ;
        //    let ListMessages_4 = []
        
           snapShot.docs.forEach((e) => {
            // console.log(e.id) ;
           ListMessages_2.push({
            id : e.id ,
            Messages : e.data().Messages ,
            Utilisateur_1 : e.data().Utilisateur_1 ,
            Utilisateur_2 : e.data().Utilisateur_2 ,
           }) ;
        //    ListMessages_4 = ListMessages_4.concat(e.data().Messages) ;
           })
           ListMessages_2 = ListMessages_2.filter((e) => {
            return ( e.Utilisateur_1 ==  Status.OuvrireSession.Id &&  e.Utilisateur_2 == props.User.id || 
                e.Utilisateur_2 ==  Status.OuvrireSession.Id &&  e.Utilisateur_1 == props.User.id
            );
           })

        //    ListMessages_4 = ListMessages_4.concat(ListMessages_2.Messages)
        //    console.log(ListMessages_2);


        let ListMessages_4 = [] ;
        ListMessages_2.forEach((Data) =>  {
            ListMessages_4 = ListMessages_4.concat(Data.Messages)
        })

           let ListMessages_5 = [] ;
           let ListMessages_3 = [] ;


        console.log(ListMessages_4) ;
        if(ListMessages_4.length != 0 &&  ListMessages_2.length != 0 ){
            // console.log(Liv stMessages);
                setListMessagesContenu(ListMessages_4) ;
        }else{
            setListMessagesContenu([]) ;
        }

           
             


         if (Test == false){
                
                setTest(true);
                setListMessages(ListMessages_2) ;

                // console.log(ListMessages_2);
                // console.log(ListMessages_4) ;

                setListMessagesContenu(ListMessages_4) ;

               }


           
               
        //    });
          
           
 
          
          
       })()
   },[props.User.id] )
 
 




    const EnvoyerMessage = () => {
        

        
        console.log('=>> -------- 01 --------------- <<=') ;
        
        let IdMessage = 'Message_' + Math.random()*100 ;
        console.log('=>> -------- 001 --------------- <<=') ;
        let date = new Date() ;
       
      
        setDoc(doc(db,'MessageChat',IdMessage),{
            Contenu: Message ,
            Utilisateur: 'User_1' ,
            TempsMessage: date.toUTCString(),
            TypeMessage: 'TEXT'


        }) ;
        console.log('=>> -------- 02 --------------- <<=') ;

        // let GroupeId = props.Groupe.id ;
        console.log('=>> -------- 002 --------------- <<=') ;


        if(ListMessagesContenu.length != 0){
            let MessageId =  ListMessages[0].id ;
        
            updateDoc(doc(db,'Chat',MessageId),{
            Messages: arrayUnion(IdMessage) , 
            })

            let Val = ListMessagesContenu ;
            Val.push(IdMessage);
            setListMessagesContenu(Val);
            setMessage('') ;

        }else{
            let idChat = 'Chat_' + Math.random()*100 ;
            setDoc(doc(db,'Chat',idChat),{
                Utilisateur_1 : "User_1" ,
                Utilisateur_2 : props.User.id ,
                Messages : [IdMessage] ,
            })
            
            let Val = ListMessagesContenu ;
            Val.push(IdMessage);
            console.log(Val) ;
            setListMessagesContenu(Val);
            setMessage('') ;
         


        }
        
       
   //------------------------------ --------------------- ----------------------------

    //     let Val = ListMessagesContenu ;
    //     Val.push(IdMessageChatGroupe)
    //    setListMessagesContenu(Val) ;
    //    setMessage('');

    }


   
        
      const ActiverFichierImage = () => {
        console.log('Done') ;
        document.querySelector('#file-Image').click();
        console.log('Done 1') ;
      }   


      const [Image , setImage] = useState() ;
      const [srcImage , set_srcImage] = useState() ;
      const [Choix , setChoix] = useState(false) ;

      const ChargerEmplacementImage = (e) => {
        setImage(e.target.files[0]) ;
        set_srcImage(URL.createObjectURL(e.target.files[0])) ;
        setChoix(true)  
    }
    

    return (
        <div className='BoiteChat container p-4'>


            <div className='BoiteChat_2 m-5 pe-2 pb-3'>
            <div className='cancel-btn1' onClick={() =>  props.Change_Dis() }  ><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>    
           
            <div className="Header">
            <hr />
               
                    <div >
                        <div className="Profil">
                            <div className='ImageProfil'>
                                <img src={props.User.image} />
                            </div>
                            <div className='Name '>
                                <span className="fw-bold mt-3">
                                   {props.User.Nom} {props.User.Prenom}
                                </span>
                            </div>
                        </div>

                    </div>

                    <hr />
                </div>
              
             
                <div className="wrapper">

              {Choix == true ? <EnvoieImage
                Image = {Image} 
                srcImage = {srcImage}
                />
              :
              ListMessagesContenu.map((Message) => <Messages Message = {Message} />) 
            }
              
                        
               

                
                     

                
                            
                    
        
                
             </div>

             {Choix == true ? '' : 
             <div >
             <hr />
                 <div className='d-flex  mt-3'>
                 <div className="Choix-Image">
                 <button className='Button-Image ms-2 mt-5' onClick={ActiverFichierImage} >
                 <span className='Icon-button-Image mt-1 '>
                 <ion-icon name="image-outline"></ion-icon>
                 </span>
                 </button> 
                 <input id='file-Image' onChange={ChargerEmplacementImage} type="file" hidden/>
                 </div>
                 <textarea value={Message} onChange={(e) => setMessage(e.target.value)} placeholder='Ecrire Votre Message ici ...'

                         className='form-control w-75 ms-3'></textarea>
                     <button className='Envoyer-button mt-4 ms-4  '  onClick={EnvoyerMessage}><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button>

                 </div>

             </div>
}
              
            </div>

        </div>
    )
}



export default BoiteChat;