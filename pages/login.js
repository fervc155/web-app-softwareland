import React ,{useState,useContext} from 'react'
import Layout from '../components/layout/layout';
import useError from '../hooks/useError';
import clienteAxios from '../config/axios';
import Router from 'next/router'
import Swal from 'sweetalert2';
import UserContext from '../context/user/userContext';


 const Home = () => {
   const userContext = useContext(UserContext);
    const { login } = userContext;

   const [ErrorTag,setError] = useError();
   const [data,setData] = useState({
     email:'',
     password:'',
    

   })


   const readData = (e)=>{
     setData({
       ...data,
       [e.target.name]:e.target.value
     })
 

   }


   const submit = ()=>{


     const error={}
     for(let k in data){
       if(data[k].trim()===''){
         error[k]='Agrega un valor'
       }
     }


  setError(error);

  if(Object.keys(error).length)
    return; 



 const sendData = async ()=>{

   try{
      const result = await clienteAxios.post('/login',data);
      if(result.status===200)
     {
        


        login(result.data.token);
        Router.push('/cv')
     }
     
   }catch(error){

 
      Swal.fire({
        title: 'Error!',
        text: error.response.data.msg,
        icon: 'error',
        confirmButtonText: 'Cool'
      })

    
     
   }
    

     


    
       
    
   }


   sendData()

      
      
         
        
      

     
   }


 const Hero = ()=>(<h1>Bienvenido de vuelta</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
          
        <div className="row justify-content-center ">
        <div className="col-md-6">
        <div className="card">
        <div className="card-body">
      
 
  <div className="form-group">
    <label  >Correo electronico</label>
    <input name="email" onChange={(e)=>readData(e)} type="email" className="form-control"  />
      <ErrorTag name="email"/>
 
 
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" onChange={(e)=>readData(e)} type="password" className="form-control"  />
     <ErrorTag name="password"/>



  </div>

  <button type="submit" onClick={submit} className="btn btn-primary">Iniciar sesion</button>
 
        </div>

        </div>
    
        </div>
        </div>

        </Layout>
       
   
  )
}

export default Home