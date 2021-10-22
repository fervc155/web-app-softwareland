import React from 'react';
import Cv from './cv.js'

const Cvs = ({list})=>{


  return(
  
   	<div className="row">
  		
  		{list.map((cv,i) => (<Cv key={i} cv={cv} />))}
  	</div>

 
  );
}



export default Cvs;