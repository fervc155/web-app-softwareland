import React,{useState,useEffect} from 'react';
import Layout from '../../components/layout/layout'

import Cv_template from '../../components/cv_template';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import {useRouter} from 'next/router'
const Cv = (props)=>{


	const router = useRouter();
   const {email} =router.query;


 

	  useEffect(()=>{
  
    const sendData = async ()=>{
      try{
        const result = await clienteAxios.get(`/cv/${email}`);
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

    if(email)
	    sendData()
  },[email])


	const [data,setData]= useState({
		id:'',
		name:'',
		web:'',
		sex:'',
		phone:'',
		photo:'',
		profesion:'',
		email:'',
		address:'',
		about:'',
		studies:[],
		experience:[],
		skills:[],
	})  

	const Hero = ()=>(

		<>
		<h2 className="text-left mb-0">Hola!</h2>
		<h1 className="text-left ">Mi nombre es {data.name}!</h1>
		<h2 className="text-left "> {data.profesion}!</h2>
</>
	)
  return(
  	<Layout Hero={Hero}>
 		<Cv_template data={data} edit={false} />
  	</Layout>
  );
}



export default Cv;