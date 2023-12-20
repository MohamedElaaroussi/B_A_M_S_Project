import React, { useState } from "react";

import { useEffect } from "react";

import ImageExp from './ImagePublication/Image 2.png';


const Section2 = () => {

    const [Info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Amis')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setInfo(data)
            })
    }, [])


    


    const Search = (e) => {
        const Typing = e.target.value;

        const Test= Info.filter((e) => {
            let NomComplet = e.Nom + " " + e.Prenom ;
            return (
                NomComplet.startsWith(Typing)
            )
        });
        setInfo(Test)
    }



    return (
        <div className="Section-2">
            <div className='Search mt-2'>
                <input
                    type='text'
                    className='form-control border border-4 rounded-pill px-3'
                    placeholder='Type to search friend ...'
                    onChange={Search}
                />
                <div className='search-outline me-2'> <ion-icon name="search-outline"></ion-icon> </div>
            </div>

            <div className="Titre ms-4">
                <h4>
                    Selectionner les membres de groupe
                </h4>

            </div>
            <div className="ApresTitre ">
                <hr className=" w-50" />
            </div>

            <div className='autocom-box mt-5'>
                {Info.map((User) =>


                    <li>
                        <div className="Profil">
                            <div className='ImageProfil'>
                                <img src={User.Image} />
                            </div>
                            <div className='Name '>
                                <span className="fw-bold">
                                    {User.Nom} {User.Prenom}
                                </span>
                            </div>
                        </div>
                        <div className='checkbox_1'>
                            <span className='checkbox_2'>
                                <input type="checkbox" className="form-check-input" />
                            </span>
                        </div>
                    </li>

                )}
            </div>




        </div>


    );
}



export default Section2;