// import { PropaneSharp } from '@mui/icons-material';
import React, { useState , useEffect } from 'react' ;


import {collection , addDoc,getDocs, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 

import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { async } from "@firebase/util";





const Messages = (props) => {


  
 
  const [ListMessagesContenu , setListMessagesContenu ]= useState('') ;
 
  const [Test, setTest] = useState(false);

  // const [ListData , setListData] = useState([]);

  useEffect(() => {

     ;(async () => {


        console.log(props.Message);
         const DocRef = doc(db,'MessageChatGroupe', props.Message);
         const snapShot = await getDoc(DocRef);



         console.log(snapShot.data().Contenu);
    
        if (Test == false || ListMessagesContenu.Contenu != snapShot.data().Contenu){
              setListMessagesContenu(snapShot.data())
              setTest(true);
             
             }
             
    
        
         

        
        
     })()
 },[props.Message] )



 

   console.log(ListMessagesContenu)

   if(ListMessagesContenu.Membre == 'User_1'){
    return (
      <div className='d-flex justify-content-end' >
      <span className="chat-bubble chat-bubble-right chat-bubble--right">
    {ListMessagesContenu.Contenu}
    </span>
    <br />
    <br />
    
      </div>
      
    )

   }else if(ListMessagesContenu.Membre != 'User_1'){
    return (
      <div className='d-flex justify-content-start'>
      <span className="chat-bubble chat-bubble-left chat-bubble--left">
      {ListMessagesContenu.Contenu}
     </span>
     <br />
    
      </div>
      
    )}






    




}






export default Messages ;