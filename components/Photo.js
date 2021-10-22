import react from 'react';

const Photo = ({src,className})=>{

	const backurl= 'http://localhost:4000';

	if(src=='')
		return null;
  
  return(
  	<img src={`${backurl}/${src}`} className={className}/>
  );
}



export default Photo;