import React,{useState,useEffect} from 'react';
import Layout from '../../components/layout/layout'
import Cvs from '../../components/cvs';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import {useRouter} from 'next/router'
const Cv = (props)=>{


	const router = useRouter();
   const {query} =router.query;


 

	  useEffect(()=>{
  
    const sendData = async ()=>{

      try{
        const result = await clienteAxios.get(`/search/${query}`);
        setList(result.data);


        console.log('god',result);

 
       }catch(error){
       
        console.log('bad',error);
      }
      
    }

    if(query)
	    sendData()
  },[query])


   const [list,setList]= useState([]); 
  


	const Hero = ()=>(

		<>
		<h2 className="text-left mb-0">Buscar!</h2>
		<h1 className="text-left ">Buscaste {query}!</h1>
		<h2 className="text-left "> {list.length} Resultado(s)!</h2>
</>
	)
  return(
  	<Layout Hero={Hero}>
   <Cvs list={list} />
	</Layout>
  );
}



export default Cv;