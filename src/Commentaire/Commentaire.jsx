
import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";


const Commentaire = () => {

    const Publication = useSelector(state => state.comment.Publication) ;

    return (
        <div>
            <div className='Image m-2'>
                <img src={Publication.ContenuPublication.Image}/>
            </div>
            <div className='comment-body'>
                <span className='Name'>
                    {Publication.Utilisateur.Nom} {Publication.Utilisateur.Prenom}
                </span>
                {Publication.Utilisateur.Description}
                <br />

                <div className='muted'>
                    <span>
                    Good ...
                    </span>
                    <span>
                        <b>
                            &nbsp; 1 Like
                        </b>
                    </span>
                </div>
            </div>
            <div className='heart-outline'>
                <span className='heart-outline'>
                    <ion-icon name="heart-outline"></ion-icon>
                </span>
            </div>
        </div>

    );
}

export default Commentaire;