import React ,{useState,useEffect} from 'react'
import Layout from '../components/layout/layout';
import useError from '../hooks/useError';
import FotoPerfil from '../components/FotoPerfil';
import Swal from 'sweetalert2';
import Router from 'next/router';
import {authAxios} from '../config/axios';
import Photo from '../components/Photo';
const Home = () => {




  const [ErrorTag,setError] = useError();

  

  const [data,setData] = useState({
    id:'',
    name:'',
    web:'',
    sex:'',
    phone:'',
    photoUrl:``,
    profesion:'',
    email:'',
    address:'',
    about:'',


  })

  useEffect(()=>{
    
    const sendData = async ()=>{
      try{
        const result = await authAxios.get('/cv');
        setData(result.data);

 
       }catch(error){
        Swal.fire({
        title: 'Error!',
        text:'No se puede obtener tus datos, recarga',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
        
      }
      
    }

    sendData()
  },[])


  const readData = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
 console.log(data);


  }
 
 

  const submit = ()=>{


   

    const error={}
    for(let k in data){
      if(typeof data[k]==='string' && data[k].trim()===''){
        error[k]='Agrega un valor'
      }
    }

    setError(error);

    if(Object.keys(error).length)
      return; 

 const sendData = async ()=>{
    try{
       const result = await authAxios.put('/update',data);
        

      Swal.fire({
        title: 'Exito',
        text: 'Informacion actualizada',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

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

 
  const Hero = ()=>(<h1>Bienvenido {data.name || 'Usuario'}</h1>)
  return (



    <Layout Hero={Hero}  >

      <div className="row justify-content-center">
        <div className="col-md-6 form-group">
        <div className="card">
        <div className="card-body">
        <h4>Datos de perfil</h4>

 
            <label  >Nombre</label>
            <input value={data.name} name="name" onChange={(e)=>readData(e)} type="text" className="form-control"  />
            <ErrorTag name="name"/>
           
               <label  >Telefono</label>
            <input value={data.phone} name="phone" onChange={(e)=>readData(e)} type="number" className="form-control"  />
            <ErrorTag name="phone"/>
        
           <label  >Correo electronico</label>
          <input value={data.email} name="email" onChange={(e)=>readData(e)} type="email" className="form-control"  />
          <ErrorTag name="email"/>

             <label  >Web</label>
          <input value={data.web} name="web" onChange={(e)=>readData(e)} type="text" className="form-control"  />
          <ErrorTag name="web"/>
             <label  >Profesion</label>
          <input value={data.profesion} name="profesion" onChange={(e)=>readData(e)} type="text" className="form-control"  />
          <ErrorTag name="profesion"/>

         <label  >Sexo</label>
          <select name="sex" value={data.sex} onChange={(e)=>readData(e)} type="text" className="form-control" >
            
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
 
          </select>
          <ErrorTag name="sex"/>

             <label  >A cerca de mi</label>
          <input value={data.about} name="about" onChange={(e)=>readData(e)} type="text" className="form-control"  />
          <ErrorTag name="about"/>

           <button type="submit" onClick={submit} className="btn btn-primary">Guardar info</button>
   
          
      </div>
      </div>
      </div>


      <div className="col-md-6">
      <div className="card">
      <div className="card-body">
              <h4>Foto de perfil</h4>
            
               <Photo className="card-img-top mb-5"  src={data.photo ||''}/> 
              

              <FotoPerfil  />
        </div>
        </div>

      
      </div>

     
    </div>
     

    </Layout>


    )
}

export default Home
 