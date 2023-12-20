import React from 'react' ;
import Section from './Section' ;
import { useState } from 'react';
import "./EditProfil.css"




const EditProfil = (props) => {
    const [LienImage , setLienImage ] = useState() ;
    const [Existe,setExiste] = useState(false) ;
    
    const AddImage = () => {
        document.querySelector('#AddImage').click() ;
    }

    const Change1 = (e) => {
        
        console.log(e.target.files[0]);
        props.setLienImage_1(e.target.files[0]) ;
        setLienImage(URL.createObjectURL(e.target.files[0]));
        setExiste(true) ;

    }

    return(
        <div className="EditProfil fst-italic p-5">
        <div className="EmplacementEditProfil m-1 pt-1 rounded-3">
        <div className="Header">
        <div className='cancel-btn'><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>
        <div className="Titre ms-4 ">
        <h3>
        Modifier votre profil : 
        </h3>
        </div> 
        </div>
        <hr />
        
        <div className="section">
        <label className="ms-2">
        Taper votre nom :
        </label> 
        <input type="text" onChange={(e) => props.setNomGroupe(e.target.value)} placeholder="Taper votre nom" className="form-control mt-2 w-75 ms-5"  />
        <label className="mt-2 ms-2">
        Donner une description :
        </label>
        <textarea onChange={(e) => props.setDescriptionGroupe(e.target.value) } placeholder="Donner une description " className="form-control mt-2 w-75 ms-5">
        </textarea>
        <div className="AddImage">
        <div className="EmplacementImage mt-3" onClick={AddImage}>
        {Existe == true ? <div className="Image"> <img src={LienImage} /> </div>  : ''}
        </div>
        <div className="add-circle-outline" onClick={AddImage}>
        <span className="add-circle-outline">
        <ion-icon name="add-circle-outline"></ion-icon>
        </span>
        <input type = "file" id="AddImage" onChange={Change1}  hidden/>
        </div>
       
        </div>    
        </div>

        <hr />
        <div className="footer">
        <div className="Envoyer">
       
        <button className='Envoyer-button' ><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button> 
        
        </div> 
        </div>
        </div>
        </div>
    );
}


export default EditProfil ;