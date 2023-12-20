import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './PersonnesRecommander.css'
import 'swiper/css';
// import { useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import {db} from '../FireBase/config' ; 
import {collection , addDoc, doc , setDoc, deleteDoc ,getDocFromCache, getDoc , getDocs}  from "firebase/firestore" ;
import { async } from '@firebase/util';
import { useEffect } from 'react';

import Image from './ImagePublication/Image 2.png' ;



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import 'swiper/css/breakpoints' ;


import  SwiperCore , { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const PersonnesRecommander = () => {


    const Doc = getDoc(doc(db,"Utilisateur","User_1"));
    // const Amis = Doc.data() ;
    console.log(Doc) ;
    SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y]) ;
    const Table = [2,3,4,5,6,7,8,9,10] ;
    
    
    // const swiper = useSwiper() ;
    return (
        <div className="PersonnesRecommander m-5"  >
        <div className="slide-container">
        <Swiper
        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
         
          }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
    
        
        {Table.map((e) => <SwiperSlide className="SlideSwiper">
            <div className="slide-content ms-5 ">
            <div className="card-wrapper">
            <div className="card">
            <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
            <img  src={Image}/>
            </div>
            </div>
            <div className="card-content">
            <span className="overlay2"></span>
            <h3>
            User {e}
            </h3>
            <span className="AmisCommun">
            12 Ami en commun
            </span>
            <span className="AddPersonne">
            <ion-icon name="person-add-outline"></ion-icon>
            </span>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>)}
    </Swiper>

        </div>
       
        </div>
    );
}

export default PersonnesRecommander ;