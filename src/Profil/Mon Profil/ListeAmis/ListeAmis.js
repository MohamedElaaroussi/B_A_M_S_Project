import React , {useState} from 'react' ;
import './ListeAmis.css' ;
import Amis from './Amis/Amis' ;
import InvitationsEnvoyer from './InvitationsEnvoyer/InvitationsEnvoyer';




const ListeAmis = () => {

   
   
   
    
    
    const [ChoixUser, setChoixUser] = useState(<Amis />)
    
    
    return(
        <div className='ListeAmis fst-italic p-5'>
        <div className='EmplacementListeAmis m-5 pt-1 rounded-3'>
        <div className='Header '>
        <div className='cancel-btn'><span><ion-icon name="close-circle-outline"></ion-icon> </span> </div>
        <div className='Titre ms-4'>
        <h3 >
        Liste des amis :
        </h3>
        </div>
        
        <div className='Navigation '>
        
        <div className='Amis mt-1 ms-4 '>
        <span  onClick={() => {setChoixUser(<Amis />)}} >
        Amis
        </span>  
        </div>

        <div className='InvitationsEnvoyer mt-1 ms-4 '>
        <span  onClick={() => {setChoixUser(<InvitationsEnvoyer/>)}}>
        Invitations
        </span>
        </div>
       
        </div>

        </div>
        <hr />

        {ChoixUser}


        </div>

        </div>

      
        
        
    );
}

export default ListeAmis ;