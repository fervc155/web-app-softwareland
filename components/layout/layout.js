import react,{useEffect,useContext} from 'react';
import Head from 'next/head';
import Header from './header'
import CheckRoute from '../../auth/checkRoute';
import UserContext from '../../context/user/userContext';



const Layout = (props)=>{
    const userContext = useContext(UserContext);
  const {checkLogin} = userContext;


  useEffect(()=>{
    const login = checkLogin();
    CheckRoute(login)
  },[]);
  

  return(
  <div>

 
  <Head>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
<Header bg={props.bg} Hero={props.Hero} />

  <main className="container py-5">               {props.children}
  </main>
  </div>
  );
}



export default Layout;