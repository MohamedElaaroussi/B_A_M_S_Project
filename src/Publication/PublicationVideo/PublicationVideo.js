import React from "react";

// JSON Data and State
import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

//CSS
import '../Publication.css'

// Comments
import { useDispatch , useSelector } from "react-redux";


import ImageP from "./Image 7.png"

import Axios from "axios";
function PublicationVideo() {
    // const dispatch = useDispatch()

    //State
    const [Publications, setPublications] = useState([]);
    const Status = useSelector(state => state)

    //Getting Data
    useEffect(() => {
       console.log( Status.OuvrireSession.Data);
        Axios.post('http://localhost:5000/Publication',{
            Id : Status.OuvrireSession.Id
        })
            .then(res => {
                setPublications(res.data)
            })
        
    }, [])
    const Dispatch = useDispatch() ;

    return (
        <div className="Publication">
        <div className="EmplacementPublication">
        {Publications.map((Publication) => {
            if(Publication.Publication.TypePublication == 'VIDEO'){
                return (
                    <div className="Publication mt-5 ms-5">
                        <div className="Publication-top">
                            <div className="ImageProfil">
                            {Publication.Utilisateur.Image == ""?  <img src={ImageP} alt="" /> : <img src={Publication.Utilisateur.Image} alt="" /> }
                            </div>
                            <div className="Publication-info">
                                <p className="name fst-italic">{Publication.Utilisateur.Nom} {Publication.Utilisateur.Prenom}</p>
                                <span className="time fst-italic">{Publication.Publication.TempsDePublication}</span>
                            </div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
    
                        <div className="Publication-content fst-italic ">
                        {Publication.ContenuPublication.Contenu}
                            <video controls width="380px">
                                <source src={Publication.ContenuPublication.Video} type="video/mp4" />
                            </video>
                        </div>
    
                        <div className="Publication-bottom mt-4">
                        <div className="action">
                        <span className = "heart-outline ms-5">
                        <ion-icon  name="heart-outline"></ion-icon>
                        </span>
                        
                            
                        </div>
                        <div className="action">
                       <span className="chatbubble-outline me-5" onClick={() => Dispatch({type : "commentvisibile" , payload : Publication})}>
                       <ion-icon name="chatbubble-outline"></ion-icon> 
                       </span>
                           
                        </div>
                        
                    </div>
                    </div>
                )
            }
        })}
                
        </div>
           
        </div>
       

    )

}


export default PublicationVideo ;