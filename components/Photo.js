import react from 'react';

const Photo = ({src,className})=>{

	const backurl= process.env.backurl;

	if(src=='')
		return null;
  
  return(
  	<img src={`${backurl}/${src}`} className={className}/>
  );
}



export default Photo;