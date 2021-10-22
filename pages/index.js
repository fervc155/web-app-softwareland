 import React,{useState,useEffect} from 'react';
import Layout from '../components/layout/layout';
import Cvs from '../components/cvs';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';



const Home = () => {

  const [list,setList]= useState([]); 
  

  useEffect(()=>{
      
      const sendData = async ()=>{
        try{
          const result = await clienteAxios.get('/');
          setList(result.data);

          console.log(result);
        }catch(error){

    Swal.fire({
          title: 'Error!',
          text:'No se puede cargar, recarga',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
          
        }
      }

      sendData()
    },[]);




  const Hero = ()=>(
    <>
    <h1  >CV Sender</h1>
    <h2   >Una forma mas facil de crear y compartir tu CV</h2>


    </>

    )


  return (



    <Layout Hero={Hero}>

    <Cvs list={list} />


    </Layout>


    )
}

export default Home