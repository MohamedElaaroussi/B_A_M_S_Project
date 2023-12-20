import React from "react";
import { useState } from "react";
import Carousel from "react-instagram-carousel";
import "./ShowStoryPeaple.css";
import howa from "./image.jpeg";
import mag2 from "./mag2.jpeg";

const ShowStory = (props) => {
  

  
  return (
    <amp-story
    style={{ width:"90rem" }}
      standalone
      title="Key Highlights of AMP Conf 2018"
      publisher="The AMP team"
      publisherLogoSrc="https://ampbyexample.com/img/AMP-Brand-White-Icon.svg"
      posterPortraitSrc={mag2}
    >
    <span className="close-circle-outline" onClick={() => {props.ShowStory(false)}}><ion-icon name="close-circle-outline"></ion-icon> </span> 
      <i
        className="fa fa-close d-flex justify-content-end"
        style={{ fontSize: "30px" }}
      />

      {props.data.Story.TypeStory == 'IMAGE' ?   
      <amp-story-page id="page-2">
      <amp-story-grid-layer template="fill">
      
        <amp-img
          width={"400"}
          height={"750"}
          layout="fill"
          src={props.data.ContenuStory.Image}
        ></amp-img>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" className="bottom">
        <h2 className="bold">Overview</h2>
      <p>
      {props.data.ContenuStory.Contenu}
      </p>
      </amp-story-grid-layer>
    </amp-story-page>  : <amp-story-page id="page-3">
    <amp-story-grid-layer template="fill">
      <amp-video
        autoplay
        loop
        width={"400"}
        height={"750"}
        poster={props.data.Utilisateur.Image}
        layout="fill"
      >
        <source
          src={props.data.ContenuStory.Video}
          type="video/mp4"
        />
      </amp-video>
    </amp-story-grid-layer>
    <amp-story-grid-layer template="vertical" className="bottom">
      <div className="introducing">
        <p className="bold blue twenty-px center">Introducing</p>
        <h2 className="bold blue center last">{props.data.ContenuStory.Contenu}</h2>
      </div>
    </amp-story-grid-layer>
  </amp-story-page> }

    </amp-story>
  );
};

export default ShowStory;
