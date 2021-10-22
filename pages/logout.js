import react,{useContext,useEffect} from 'react';
import Router from 'next/router'
import UserContext from '../context/user/userContext';
import Layout from '../components/layout/layout';

const Logout = (props)=>{
  
	const userContext = useContext(UserContext);
	const {logout} = userContext;
	
	

	useEffect(()=>{
	  
	  logout();

  	  Router.push('/login')
	  
	},[]);

  return <Layout><p> Saliendo ...</p></Layout>
   
}



export default Logout;