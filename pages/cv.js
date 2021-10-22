import React,{useState,useEffect} from 'react';
import Layout from '../components/layout/layout'

import Cv_template from '../components/cv_template';
import Swal from 'sweetalert2';
import {authAxios} from '../config/axios';

const Cv = (props)=>{

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
 		<Cv_template data={data} edit={true} />
  	</Layout>
  );
}



export default Cv;