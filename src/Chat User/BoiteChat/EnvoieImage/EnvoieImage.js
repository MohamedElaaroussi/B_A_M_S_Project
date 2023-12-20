import React from 'react' ;

import './EnvoieImage.css' ;


const EnvoieImage = (props) => {
    return(
       <div className='EnvoieImage'>
       <div className='EmplacemntEnvoieImage'>
       <div className='EmplacementImage ms-2'>
       <img src={props.srcImage} />
       </div>

       </div>       
       </div>
    );
}



export default EnvoieImage;