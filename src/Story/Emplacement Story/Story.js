import { useState } from "react";
import StoryAmis from "./Story Amis/StoryAmis";
import ShowStory from "./ShowStoryPeaple";
import ImageP from './Image 7.png';
const Story = ({ img, Nom , data }) => {
  const [BoolenShowStory, setBoolenShowStory] = useState(false);
  const Change = () => {
    setBoolenShowStory(true);
  };
 

  console.log(data); 
  return (
    <span >
      {BoolenShowStory ? <ShowStory ShowStory = {setBoolenShowStory}   data = {data}/> : ""}

      {
        <div className="story" >
          <div className="story-container">
            {img == ''? <img src={ImageP} onClick={Change} /> :<img src={img} onClick={Change} />}
            <svg className="story-border" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40"></circle>
            </svg>
          </div>
          <span style={{position:"relative" , right : "14px" }} className="username"> {Nom} </span>
          
        </div>
      }
    </span>
  );
};

export default Story;
