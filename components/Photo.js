import react from 'react';

const Photo = ({src,className})=>{

	const backurl= 'https://morning-coast-45481.herokuapp.com';

	if(src=='')
		return null;
  
  return(
  	<img src={`${backurl}/${src}`} className={className}/>
  );
}



export default Photo;