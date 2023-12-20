// import { PropaneSharp } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';


import { collection, addDoc, getDocs, doc, setDoc, deleteDoc, getDoc, updateDoc, Firestore } from "firebase/firestore";
import { db } from '../../FireBase/config';

import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import { async } from "@firebase/util";




import { useSelector } from "react-redux";

const Messages = (props) => {



  const Status = useSelector((state) => state)
  const [ListMessagesContenu, setListMessagesContenu] = useState('');

  const [Test, setTest] = useState(false);

  // const [ListData , setListData] = useState([]);

  useEffect(() => {

    ; (async () => {


      console.log(props.Message);
      const DocRef = doc(db, 'MessageChat', props.Message);


      try {
        const snapShot = await getDoc(DocRef);
        console.log(snapShot.data().Contenu);

        if (Test == false || ListMessagesContenu.Contenu != snapShot.data().Contenu) {
          setListMessagesContenu(snapShot.data())
          setTest(true);
          let Val = snapShot.data().TempsMessage;
          // Val = Val / 3600  

          console.log(Val.getFullYear())
        }
      } catch (e) {
        console.log("Erroe => " + e);

      }











    })()
  }, [props.Message])





  console.log(ListMessagesContenu)

  if (ListMessagesContenu.Utilisateur == Status.OuvrireSession.Id) {
    if (ListMessagesContenu.TypeMessage == 'IMAGE') {
      return (
        <div className='d-flex justify-content-end' >
        <div className='d-flex flex-column'>
        <span className="chat-bubble chat-bubble-right chat-bubble--right">
        
        <img src={ListMessagesContenu.Contenu} />
        </span>
        
        <span className='TEMPS_MESSAGE'>
        {ListMessagesContenu.TempsMessage}
        </span>
        </div>      
     
        </div>
        
      )

    } else if (ListMessagesContenu.TypeMessage == 'TEXT') {
      return (
        <div className='d-flex justify-content-end' >
        <div className='d-flex flex-column'>
        <span className="chat-bubble chat-bubble-right chat-bubble--right">
        {ListMessagesContenu.Contenu}
      
        </span>
        
        <span className='TEMPS_MESSAGE' >
        {ListMessagesContenu.TempsMessage}
        </span>
        </div>      
     
        </div>
        
      )

    }
  } else if (ListMessagesContenu.Utilisateur != Status.OuvrireSession.Id) {
      if (ListMessagesContenu.TypeMessage == 'IMAGE') {
        return (
          <div className='d-flex justify-content-start' >
            <div className='d-flex flex-column'>
              <span className="chat-bubble chat-bubble-left chat-bubble--left">
                <img src={ListMessagesContenu.Contenu} />
                <br />



              </span>
              <span className='ms-2'>
                {ListMessagesContenu.TempsMessage}
              </span>
            </div>

          </div>

        )


      } else if (ListMessagesContenu.TypeMessage == 'TEXT') {
        return (
          <div className='d-flex justify-content-start' >
            <div className='d-flex flex-column'>
              <span className="chat-bubble chat-bubble-left chat-bubble--left">
                {ListMessagesContenu.Contenu}<br />



              </span>
              <span className='ms-2'>
                {ListMessagesContenu.TempsMessage}
              </span>
            </div>

          </div>

        )
      }



    }










  }






  export default Messages;