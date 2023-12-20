import React from "react";

// JSON Data and State
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//CSS
import '../Publication.css'

import ImageP from "./Image 7.png"

import Rechargement from '../../Chargement/Chargement';

//Comments
import { useDispatch , useSelector} from "react-redux";
import Chargement from "../../Chargement/Chargement";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

import Axios from "axios";
function PublicationImage(props) {

    // const dispatch = useDispatch()

    //State
    const [Publication, setPublication] = useState([]);
    const Status = useSelector(state => state)

    //Getting Data
    useEffect(() => {
        Axios.post('http://localhost:5000/Publication',{
            Id : Status.OuvrireSession.Id
        })
            .then(res => {
                setPublication(res.data)            })
            
    }, [])

    const Dispatch = useDispatch();

    return (
        <div className="Publication">

            <div className="EmplacementPublication">
                {Publication.length == 0 ? '' : props.MCharger(false)  }


                {props.Charger? '' : Publication.map((Publication) => {

                    if (Publication.Publication.TypePublication == 'IMAGE') {
                        return (
    
                            <div className="Publication mt-5 ms-5">
    
                                <div className="Publication-top">
                                    <div className="ImageProfil" >
                                        {Publication.Utilisateur.Image == ""?  <img src={ImageP} alt="" /> : <img src={Publication.Utilisateur.Image} alt="" /> }
                                    </div>
                                    <div className="Publication-info">
                                        <p className="name fst-italic">{Publication.Utilisateur.Nom} {Publication.Utilisateur.Prenom}</p>
                                        <span className="time fst-italic">{Publication.Publication.TempsDePublication}</span>
                                    </div>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
    
                                <div className="Publication-content fst-italic">
                                    {Publication.ContenuPublication.Contenu}
                                    <img src={Publication.ContenuPublication.Image} alt="" />
                                </div>
    
                                <div className="Publication-bottom mt-4">
                                    <div className="action">
                                        <span className="heart-outline ms-5">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </span>
    
    
                                    </div>
                                    <div className="action">
                                        <span className="chatbubble-outline me-5" onClick={() => Dispatch({ type: "commentvisibile", payload: Publication })}>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                        </span>
    
                                    </div>
    
                                </div>
                            </div>
                        )
                    }
    
    
                }) 
            }
                
                    
                  
             
                    
            
            
         
                
            </div>


        </div>


    )

}

export default PublicationImage