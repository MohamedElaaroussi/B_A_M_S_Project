// import react from 'react' ;

import Commentaire from './Commentaire';
import './PublicationD.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const PublicationD = () => {

    const PubD = useSelector(state => state.comment.Publication)
    const show  = useSelector(state => state.comment.show)


const Dispatch = useDispatch() ;
    


    const ListExemple = [1, 2, 3, 4, 5];

    return (
        <div className='PublicationD'>
         
                <div className='EmplacementPublication  card w-75 m-5'>
                    <div className='Post'>
                        <img className='card-img-left ' alt='Card image cap' src={PubD.ContenuPublication.Image} />
                    </div>
                    <div className='Commentaire fst-italic'>
                        <header style={{ display : 'flex'}}>
                            <span className='title' style={{paddingLeft:'200px'}}> Comments </span>
                            <div className='cancel-btn1' onClick={() => {
                                Dispatch({type : 'commentvisibile' , payload : ''})
                               
                                } 
                            }><span  className='close-circle-outline'><ion-icon name="close-circle-outline"></ion-icon> </span> </div>
                        </header>
                        <section className='Section'>
                            {ListExemple.map(() => <Commentaire />)}

                        </section>
                        <footer>
                            <div>
                                <section>
                                   
                                    <div className='ms-3' >
                                        <span>
                                            11 123 J'aime  &nbsp;
                                        </span>

                                        <span>
                                           {PubD.Publication.TempsDePublication}
                                        </span>
                                    </div>
                                </section>
                                <div className='Envoyer'>
                                    <textarea className='form-control w-75  ms-2'>

                                    </textarea>
                                    <button className='Envoyer-button m-2 '><span className='button__icon_3 ms-2 mt-1'><ion-icon name="send-outline"></ion-icon></span></button>

                                </div>
                            </div>
                        </footer>


                    </div>

                </div>
          
        </div>



    );
}

export default PublicationD;