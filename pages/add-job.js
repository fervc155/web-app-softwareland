import React,{useState,useEffect} from 'react';
import Layout from '../components/layout/layout'
import {BtnBack} from '../components/layout/ui'
import Link from 'next/link';
import useError from '../hooks/useError';
import Job from '../components/job';

import Swal from 'sweetalert2';
import Router from 'next/router';
import {authAxios} from '../config/axios';

 const AddSkill = (props)=>{

 

const [ErrorTag,setError]= useError();
const [jobs,setJobs]=useState([]);
const initialjob={
	institution:'',
	job:'',
	start:'',
	end:'',
}
const [job,setJob]= useState(initialjob);

 const updateJobs = async (jobsParams)=>{


      try{
      	const dataJobs = {'experience': jobsParams}
        const result = await authAxios.put('update',dataJobs)
      
      	setJobs(result.data.experience);
				setJob(initialjob);
      }catch(error){
      	   	console.log(error);
        Swal.fire({
        title: 'Error!',
        text:'No se pudo agregar',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
        
      }
      
    }

 useEffect(()=>{
    
    const sendData = async ()=>{
      try{
        const result = await authAxios.get('/cv');
        setJobs(result.data.experience);

 
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


	const deletejob = (jobparam,idparam)=>{



		let tempjobs = jobs.filter((jobfilter,id)=>idparam!==id);
		updateJobs(tempjobs);

	  
	}

	const submit = ()=>{

		const error={};

		for(let k in job){
			if(job[k].trim()===''){
				error[k]='Agrega un valor';
			}


		}

	  setError(error);

	  if(Object.keys(error).length)
	    return; 




	  const jobsparam = [
	  		...jobs,
	  		job
	  	]

	  updateJobs(jobsparam);
	}

	const readData= (e)=>{
		setJob({
			...job,
			[e.target.name]:e.target.value
		})
	  
	}

  
  const Hero = ()=>(<h1>Mi experiencia</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
   	<div className="row card">
  	<div className="col card-body ">
  		<div className="form-group row ">

  		<div className="col-md-4">
  			<label htmlFor="">Institucion</label>
  			<input value={job.institution} onChange={(e)=>(readData(e))} className="form-control" name="institution" />
 			<ErrorTag name="institution"/>
 </div>
   		<div className="col-md-4">

 		<label htmlFor="">Puesto</label>
  			<input value={job.job} onChange={(e)=>(readData(e))} className="form-control" name="job" />
  			<ErrorTag name="job"/>

   </div>
   		<div className="col-md-2">

  		<label htmlFor="">Comienzo</label>
  			<input value={job.start} onChange={(e)=>(readData(e))} className="form-control" name="start" />
   			<ErrorTag name="start"/>
 
   </div>
   		<div className="col-md-2">

  		<label htmlFor="">Fin</label>
  			<input value={job.end} onChange={(e)=>(readData(e))} className="form-control" name="end" />
   			<ErrorTag name="end"/>
   			<small>Año/Trunca/Actual</small>

  </div>
  			 <div className="col-12 mt-3">
  			<BtnBack><Link href="/cv">Volver</Link> </BtnBack>
  			<button onClick={submit} className="btn btn-primary">Agregar </button>
  	
 		 	

  		</div>



  		</div>
	 	{jobs.map((job,id)=>(<Job job={job} fn={deletejob} id={id} key={id} />))}

  		 
  		 
  	</div>
  	</div>

  </Layout>
  );
}



export default AddSkill;