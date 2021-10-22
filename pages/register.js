import React ,{useState} from 'react'
import Layout from '../components/layout/layout';
import useError from '../hooks/useError';
import clienteAxios from '../config/axios';
import Router from 'next/router'
import Swal from 'sweetalert2';

 const Home = () => {


 	const [ErrorTag,setError] = useError();
 	const [data,setData] = useState({
 		email:'',
 		password:'',
 		phone:'',
 		name:'',
 	 

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
     const result = await clienteAxios.post('register',data);

     if(result.status===200)
       {
          Swal.fire({
          title: 'Exito',
          text: 'Registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
           Router.push('/login')
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


 const Hero = ()=>(<h1>Registrate y comparte tu cv</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
          
        <div className="row justify-content-center  ">
        <div className="col-md-6">
              <div className="card">
        <div className="card-body">
      
 

   <div className="form-group">
    <label  >Nombre</label>
    <input name="name" onChange={(e)=>readData(e)} type="text" className="form-control"  />
  	  <ErrorTag name="name"/>
 
 
  </div>
     <div className="form-group">
    <label  >Telefono</label>
    <input name="phone" onChange={(e)=>readData(e)} type="number" className="form-control"  />
  	  <ErrorTag name="phone"/>
 
 
  </div>
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

  <button type="submit" onClick={submit} className="btn btn-primary">Registrarme Ahora</button>
 
        </div>

        </div>
     </div>

        </div>

        </Layout>
       
   
  )
}

export default Home