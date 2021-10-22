import react from 'react';
import Navegacion from './navegacion';

const Header = (props)=>{

	const {Hero} = props || null ;
  
  return(
 <header className={props.bg || 'bg1'}>


 <div className="container">
 	
 <Navegacion />

	{Hero ? (<div className="mb-5"> <Hero /></div>) : null}  

</div>

 </header>
  );
}



export default Header;