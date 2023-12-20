import React , {useState,useEffect} from "react";
import { storage } from  '../../../../FireBase/config';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion,arrayRemove, deleteField, FieldValue } from 'firebase/firestore';
import {collection ,onSnapshot,query ,addDoc, doc , setDoc, deleteDoc ,getDocs ,getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../../../FireBase/config' ; 
import { async } from "@firebase/util";


const InvitationsEnvoyer = () => {
    
   const [ListInvitationEnvoyer , setListInvitationEnvoyer ]= useState([]) ;
   const [Test, setTest] = useState(false);
   const [ListData , setListData] = useState([]);

   useEffect(() => {
      ;(async () => {
          const DocRef = doc(db,'Utilisateur','User_1');
          const snapShot = await getDoc(DocRef);
          const ListInvitationEnvoyer_3 = [] ;
          // console.log(snapShot.data().ListAmis);
          // setListeAmis(snapShot.data().ListAmis);
          const ListInvitationEnvoyer_2 = snapShot.data().ListInvitationEnvoyer;
          let i = 0 ;
          ListInvitationEnvoyer_2.forEach(async(Element) => {
          
              const DocRef_2 = doc(db,'Utilisateur',Element);
              const snapShot = await getDoc(DocRef_2);
              
              const Data = {
                  id : Element ,
                  Nom : snapShot.data().Nom ,
                  Prenom : snapShot.data().Prenom ,
                  image : snapShot.data().Image ,
            
              }
              ListInvitationEnvoyer_3.push(Data) ;
              i++ ;
              if(i == 4 && Test == false){
                  setTest(true);
                  setListInvitationEnvoyer(ListInvitationEnvoyer_3);
                  setListData(ListInvitationEnvoyer_3)
              }
              
          });
         
          

         
         
      })()
  },[ListInvitationEnvoyer]
  )

   
  const Search = (e) => {
   const Typing  =  e.target.value ;
   console.log(ListInvitationEnvoyer);
   const Test = ListInvitationEnvoyer.filter((User) => {
       const CompletNom = User.Nom +' '+User.Prenom
       return(
           CompletNom.startsWith(Typing)
       )
   });
   console.log(Test)
   setListData(Test) ;
}


    const Cancel = (e) => {
        
        const idCancel = e.target.attributes.value.nodeValue

        updateDoc(doc(db,'Utilisateur','User_1'), {
            ListInvitationEnvoyer: arrayRemove(idCancel) ,
        });
        updateDoc(doc(db,'Utilisateur',idCancel), {
            ListInvitationRecu: arrayRemove('User_1') ,
        });

        let NewListData = ListInvitationEnvoyer.filter((User => {
            
                return User.id != idCancel ;
                
            
        }
            ))




         setListInvitationEnvoyer(NewListData)
        setListData(NewListData);
        

        

    }      

    
    return (
        <div>
        <div className='Search mt-2'>
        <input 
        type='text'
        className='form-control border border-4 rounded-pill px-3' 
        placeholder='Type to search invitation ...'
        onChange={Search}
        />
        <div className='search-outline me-2'> <ion-icon name="search-outline"></ion-icon> </div>
        </div>
        <hr/>
        <div className='autocom-box mt-5'>
        { 
         ListInvitationEnvoyer.length == 0? '' : ListData.map((User) =>
       
             
      <li> 
      <div className="Profil">
      <div className='ImageProfil'>
      <img  src={User.image} /> 
      </div>
      <div className='Name '>
      <span className="fw-bold">
      {User.Nom} {User.Prenom}  {User.id}
      </span>
      </div>
      </div>
      <div className='Cancel '>
      <span onClick = {Cancel} value = {User.id}  >
      Cancel
      </span>
      </div>
      
      </li>
        
       )}
        </div>

        
        </div>
    );
}


export default InvitationsEnvoyer ;