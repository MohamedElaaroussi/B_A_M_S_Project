import React , {useState,useEffect} from "react";
import { storage } from  '../../FireBase/config';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion,arrayRemove, deleteField, FieldValue } from 'firebase/firestore';
import {collection ,onSnapshot,query ,addDoc, doc , setDoc, deleteDoc ,getDocs ,getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../FireBase/config' ; 
import { async } from "@firebase/util";

import BoiteChat from "../BoiteChatGroupe/BoiteChat";

const Groupes = () => {
    

   const [ListGroupeChat , setListGroupeChat ]= useState([]) ;
   const [Test, setTest] = useState(false);
   const [ListData , setListData] = useState([]);
   const [Event , setEvent] = useState(false) ;
   const [Groupe, setGroupe] = useState();

   useEffect(() => {
      ;(async () => {
          const DocRef = doc(db,'Utilisateur','User_1');
          const snapShot = await getDoc(DocRef);
          let ListGroupeChat_2 = snapShot.data().ListGroupeChat ;
          let ListGroupeChat_3 = [] ;

        let i = ListGroupeChat_2.length ; 
        console.log(i) ;
        ListGroupeChat_2.forEach(async (Element,index) => {
            // console.log(index);
            const DocRef = doc(db,'GroupeChat',Element);
            const snapShot = await getDoc(DocRef);
            let Data = {
                id : Element ,
                Admin : snapShot.data().Admin ,
                ImageDeGroupe : snapShot.data().ImageDeGroupe ,
                NomGroupe : snapShot.data().NomGroupe ,
                ListeDesMembres : snapShot.data().ListeDesMembre ,
                DescriptionGroupe : snapShot.data().DescriptionGroupe ,
            } ;
            ListGroupeChat_3.push(Data) ;
            if(i - 1 == index && Test == false){
                // console.log('--------------')
                setListData(ListGroupeChat_3);
                setTest(true) ;
                setListGroupeChat(ListGroupeChat_3);

            }
                        
            // ListGroupeChat_3.push(Data);
            // console.log(Data);
            
          });
        //   console.log(ListGroupeChat_3[0]);
     
         
      })()
  },[ListGroupeChat]
  )

   
  const Search = (e) => {
   const Typing  =  e.target.value ;
   console.log(ListGroupeChat);
   const Test = ListGroupeChat.filter((Groupe) => {
    let NomGroupe = Groupe.NomGroupe    
    return(
           NomGroupe.startsWith(Typing)
       )
   });
   console.log(Test)
   setListData(Test) ;
}


 

    
    return (
        <div>
        <div className='Search mt-2'>
        <input 
        type='text'
        className='form-control border border-4 rounded-pill px-3' 
        placeholder='Type to search Groupe ...'
        onChange={Search}
        />
        <div className='search-outline me-2'> <ion-icon name="search-outline"></ion-icon> </div>
        </div>
        <hr/>
        <div className='autocom-box mt-5'>
        {Event == true ? <div className="addGroupe">
                    <BoiteChat
                        Change_Dis={setEvent}
                        Groupe={Groupe} />
                </div> : ''}
        { 
         ListGroupeChat.length == 0? '' : ListData.map((Groupe) =>
       
             
      <li onClick={() => {
        setEvent(true) 
        setGroupe(Groupe)
      } }> 
      <div className="Profil">
      <div className='ImageProfil'>
      <img  src={Groupe.ImageDeGroupe} /> 
      </div>
      <div className=' Name'>
      <span className="fw-bold">
      {Groupe.NomGroupe}
      </span>
      </div>
      </div>
     
      
      </li>
        
       )}
        </div>

        
        </div>
    );
}


export default Groupes ;