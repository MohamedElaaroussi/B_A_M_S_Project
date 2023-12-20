import React , {useState,useEffect} from "react";
import { storage } from  '../../../../FireBase/config';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import {collection ,onSnapshot,query ,addDoc, doc , setDoc, deleteDoc ,getDocs ,getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../../../FireBase/config' ; 
import { async } from "@firebase/util";


const Amis = () => {
    
   const [ListAmis , setListeAmis ]= useState([]) ;
   const [Test, setTest] = useState(false);
   const [ListData , setListData] = useState([]);

   useEffect(() => {
      ;(async () => {
          const DocRef = doc(db,'Utilisateur','User_1');
          const snapShot = await getDoc(DocRef);
          const ListAmis_3 = [] ;
          // console.log(snapShot.data().ListAmis);
          // setListeAmis(snapShot.data().ListAmis);
          const ListAmis_2 = snapShot.data().ListAmis;
          let i = 0 ;
          ListAmis_2.forEach(async(Element) => {
          
              const DocRef_2 = doc(db,'Utilisateur',Element);
              const snapShot = await getDoc(DocRef_2);
              
              const Data = {
                  id : Element ,
                  Nom : snapShot.data().Nom ,
                  Prenom : snapShot.data().Prenom ,
                  image : snapShot.data().Image ,
               
              }
              ListAmis_3.push(Data) ;
              i++ ;
              if(i == 4 && Test == false){
                  setTest(true);
                  setListeAmis(ListAmis_3);
                  setListData(ListAmis_3)
              }
              
          });
         
          

         
         
      })()
  },[ListAmis]
  )

   
  const Search = (e) => {
   const Typing  =  e.target.value ;

   const Test = ListAmis.filter((User) => {
       const CompletNom = User.Nom +' '+User.Prenom
       return(
           CompletNom.startsWith(Typing)
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
        placeholder='Type to search friend ...'
        onChange={Search}
        />
        <div className='search-outline me-2'> <ion-icon name="search-outline"></ion-icon> </div>
        </div>
        <hr/>
        <div className='autocom-box mt-5'>
        { 
         ListAmis.length == 0? '' : ListData.map((User) =>
       
             
      <li key={User.id}> 
      <div className="Profil">
      <div className='ImageProfil'>
      <img  src={User.image} /> 
      </div>
      <div className='Name '>
      <span className="fw-bold">
      {User.Nom} {User.Prenom} 
      </span>
      </div>
      </div>
      
      </li>
        
       )}
        </div>

        
        </div>
    );

}


export default Amis ;