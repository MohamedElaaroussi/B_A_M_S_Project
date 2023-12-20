


import React, { useState } from 'react';
import './Chat.css';
import Amis from './Amis/Amis';
import Groupes from './Groupes/Groupes';
import CreationGroupe from './Creation Groupe Chat/CreationGroupe';



const ListeAmis = () => {






    const [ChoixUser, setChoixUser] = useState(<Amis />)


    return (
        <div className='Chat fst-italic p-5'>
            <div className='EmplacementChat m-1 pt-1 rounded-3'>
                <div className='Header pt-2'>
                    
                    <div className='Titre ms-4'>
                        <h3 >
                            Chat :
                        </h3>
                    </div>

                    <div className='Navigation '>

                        <div className='Amis mt-1 ms-4 '>
                            <span onClick={() => { setChoixUser(<Amis />) }} >
                                Amis
                            </span>
                        </div>

                        <div className='InvitationsEnvoyer mt-1 ms-4 '>
                            <span onClick={() => { setChoixUser(<Groupes />) }}>
                                Groupes
                            </span>



                        </div>
                        <div className='addGroupe ms-5 mt-1'>
                            <span onClick={() => { setChoixUser(<CreationGroupe />) }}>
                                <ion-icon name="add-outline"></ion-icon>
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

export default ListeAmis;