import React ,{useState} from 'react'
import Layout from '../components/layout/layout';
import useError from '../hooks/useError';
import {authAxios} from '../config/axios';
import Swal from 'sweetalert2';
 const Home = () => {


   const [ErrorTag,setError] = useError();
   const initialState = {
     password_new:'',
     password:'',
   };

   const [data,setData] = useState(initialState)


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
       const result = await authAxios.put('/change-password',data);
        

      Swal.fire({
        title: 'Exito',
        text: 'Contraseña cambiada con exito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      setData(initialState);

    }catch(error){


     
      Swal.fire({
        title: 'Error!',
        text: error.response.data.msg,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      
    }
    
  }

  sendData();
  
      
         
        
      

     
   }


 const Hero = ()=>(<h1>Cambia tu contraseña</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
          
        <div className="row justify-content-center ">
        <div className="col-md-6">
        <div className="card">
        <div className="card-body">
      
 
  <div className="form-group">
    <label  >Contraseña</label>
    <input value={data.password} name="password" onChange={(e)=>readData(e)} type="password" className="form-control"  />
      <ErrorTag name="password"/>
 
 
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={data.password_new} name="password_new" onChange={(e)=>readData(e)} type="password" className="form-control"  />
     <ErrorTag name="password_new"/>



  </div>

  <button type="submit" onClick={submit} className="btn btn-primary">Cambiar contraseña</button>
 
        </div>

        </div>
    
        </div>
        </div>

        </Layout>
       
   
  )
}

export default Home