import React  from 'react';
import { useState } from 'react';
import {collection , addDoc, doc , setDoc, deleteDoc , getDoc , updateDoc, Firestore }  from "firebase/firestore" ;
import {db} from '../../../FireBase/config' ; 
// import { Firestore } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,  deleteObject } from "firebase/storage";
import { arrayUnion } from 'firebase/firestore';
import './AjouterStory.css';
import { useSelector } from 'react-redux';

// import axios from 'axios' ;
import { storage } from  '../../../FireBase/config';

// import Menu from './Menu/Menu' ;


function AjouterStory(props) {
    
    const [DefaultBtn, setDefaultBtn ] = useState(<input id='default-btn' type="file" onChange={(e) =>{ Changer1(e) }} hidden/>) ;
    const [DefaultBtn1, setDefaultBtn1 ] = useState(<input id='default-btn1' type="file" onChange={(e) =>{ Changer2(e)} } hidden/>) ;
    const[AddVideoBtn, setAddVideoBtn] = useState(<button onClick={() => {DefaultBtnActive1()}} className='choix-button2 mt-3 ms-2 '><span className='button__icon_1 mt-1 ms-1'> <ion-icon name="videocam-outline"></ion-icon></span></button> ) ;
    const [AddImageBtn, setAddImageBtn ] = useState(   <button className='choix-button  ms-5' onClick={() => {DefaultBtnActive()}}> <span className='mt-1 button__icon_1  ms-1'> <ion-icon name="image-outline"></ion-icon></span></button> ) ;
    


    //-------------------- Image , Video ----------------------------
    const [video , setVideo] = useState(null);
    const [image , setImage] = useState(null);  


    //--------------------- src Utiliser -----------------------------

    const [srcImage, set_srcImage] = useState(null) ;
    const [srcVideo, set_srcVideo] = useState(null) ;



    //---------------------- Element de voire quel est Video ou Image ? -------------

    const [Element , setElement ] = useState('') ;

    // -------------------------------------------------------------------------
    const [ContenuText , setContenuText] = useState('') ;

    // const [ListPublication , setListPublication] = useState([]);

    const Status =  useSelector((state) => state)
    
    const [url, setUrl] = useState(null);
    const [Ref , setRef] = useState(null);

    const EnvoyerPub = async() => {
      
      const IdStory = 'Story_' + Math.random()*1000 ;
      const IdContenuStory = 'ContenuStory_' +  Math.random()*1000 ;
      
      updateDoc(doc(db,'Utilisateur',  Status.OuvrireSession.Id ),{
          ListStory : arrayUnion(
              IdStory
              ) ,  
      }) ;

      let date = new Date() ;
      setDoc(doc(db,"Story",IdStory),
      {
          TempsDeStory : date.toUTCString() ,
          ContenuDeStory : IdContenuStory
      
      } );

      if(Element == 'Image'){
        
        const LinkImage = "Users/" +Status.OuvrireSession.Id+ "/Story/" + Status.OuvrireSession.Id + "_Img " + Math.random()*1000 ;

        console.log('Lien => :' + image) ;
        
        const imageRef = ref(storage, LinkImage);

        console.log('imageRef => :' + imageRef) ;
        
        setRef(imageRef) ;
        uploadBytes(imageRef, image).then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              console.log(url) ;
              setUrl(url);
              AjouterContenuImage(IdContenuStory,url) ;
            
            })
            .catch((error) => {
              console.log(error.message, "Error getting the image url");
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });



      

      }
      else{
         
        const LinkVideo = "Users/" + Status.OuvrireSession.Id +"/Story/" + Status.OuvrireSession.Id + "_Vid " + Math.random()*1000 ;

        console.log('Lien => :' + video) ;
        
        const videoRef = ref(storage, LinkVideo);

        console.log('videoRef => :' + videoRef) ;
        
        setRef(videoRef) ;
        uploadBytes(videoRef, video).then(() => {
          getDownloadURL(videoRef)
            .then((url) => {
              setUrl(url);
              AjouterContenuVideo(IdContenuStory,url)
            
            })
            .catch((error) => {
              console.log(error.message, "Error getting the image url");
            });
          setVideo(null);
        })
        .catch((error) => {
          console.log(error.message);
        });

   
       }
      



         
     



       
        
        
    }


    const AjouterContenuImage = (IdContenuStory,url) => {
      setDoc(doc(db,"ContenuStory",IdContenuStory),
      {
        Image :  url ,
        Contenu : ContenuText,
      
      }
      )
    }

    const AjouterContenuVideo = (IdContenuStory,url) => {
      setDoc(doc(db,"ContenuStory",IdContenuStory),
      {
        Video :  url ,
        Contenu : ContenuText,
      
      }
      )

    }

    const Changer1 = (e) => {
        if(e.target.files[0]){
          setImage(e.target.files[0]) ;
          set_srcImage(URL.createObjectURL(e.target.files[0])) ;
          console.log(image) ;
          setElement('Image');
        }
    }

    const Changer2 = (e) => {
        setVideo(e.target.files[0]) ;
        set_srcVideo(URL.createObjectURL(e.target.files[0])) ;
        setElement('Video');
    }

    const DefaultBtnActive = () => {
        console.log('Done') ;
        document.querySelector('#default-btn').click();
        console.log('Done 1') ;

    }
    const DefaultBtnActive1 = () => {
        console.log('Done') ;
        document.querySelector('#default-btn1').click();
        console.log('Done 1') ;

    }


   
    const Skeep = () => {
        setElement('');
    }

    const Sortir = () => {
        props.setShow(false) ;
    }
   
    return (

    <div className='AjouterStory'>
    <div className='EmplacementAjouterStory'>
    <br className='m-4'/>
    <div className='AddPub m-5 pe-2 pb-3'>
 
    <div className='cancel-btn1' onClick={Sortir}  ><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>
    <div className='wrapper m-5 '>

    <div className='image'>
    
    {Element == 'Image' ? <img className='me-4' src={srcImage} /> :  '' }
    {Element == 'Video' ? <video className='me-4' controls><source src={srcVideo} type="video/mp4" /> </video> : ''}
  
    
    
    
    </div>
    {Element != '' ? '' : <div className='content'>
    <div className='icon ms-3 ' > <ion-icon name="cloud-upload-outline"></ion-icon> </div>
    <div className='text'><span className='me-3 fst-italic'>No file chosen , yet !</span>  </div>
    </div> }
    <div className='cancel-btn' onClick={() => {Skeep()}} ><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>
    <div className='file-name text text-center'> File name here </div>
    </div> 
    <div >
    <div className='d-flex ms-5'>
    <textarea placeholder='Ecrire Votre Message ici ...'
    onChange={(e) => setContenuText(e.target.value) } 
     className='form-control w-75 ms-3'></textarea>
    <button onClick={EnvoyerPub}  className='Envoyer-button mt-4 ms-4  '><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button> 

</div>    

<div className='ms-3'>
{AddImageBtn}
{AddVideoBtn}
{DefaultBtn}
{DefaultBtn1}

</div>

    
    </div>


    <div className=''>
    
    </div>
    
    </div>

    </div>
    </div>

  );
}


export default AjouterStory;
