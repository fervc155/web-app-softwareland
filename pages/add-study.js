import React,{useState,useEffect} from 'react';
import Layout from '../components/layout/layout'
import {BtnBack} from '../components/layout/ui'
import Link from 'next/link';
import useError from '../hooks/useError';
import Study from '../components/study';

import Swal from 'sweetalert2';
import Router from 'next/router';
import {authAxios} from '../config/axios';


 const AddSkill = (props)=>{

const [ErrorTag,setError]= useError();
const [studies,setStudies]=useState([]);
const initialStudy={
	institution:'',
	study:'',
	start:'',
	end:'',
}
const [study,setStudy]= useState(initialStudy);

  useEffect(()=>{
    
    const sendData = async ()=>{
      try{
        const result = await authAxios.get('/cv');
        setStudies(result.data.studies);

 
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


	const deleteStudy = (studyparam,idparam)=>{



		let tempstudies = studies.filter((studyfilter,id)=>idparam!==id);
		updateStudies(tempstudies);
	  
	}

	const submit = ()=>{

		const error={};

		for(let k in study){
			if(study[k].trim()===''){
				error[k]='Agrega un valor';
			}


		}

	  setError(error);

	  if(Object.keys(error).length)
	    return; 




	  const studiesparam = [
	  		...studies,
	  		study
	  	];

	  updateStudies(studiesparam)
	}

	const readData= (e)=>{
		setStudy({
			...study,
			[e.target.name]:e.target.value
		})
	  
	}

		 const updateStudies = async (studiesparam)=>{


      try{
      	const dataStudies = {'studies': studiesparam}
        const result = await authAxios.put('update',dataStudies)
      
      	setStudies(result.data.studies);
				setStudy(initialStudy)
      }catch(error){
        Swal.fire({
        title: 'Error!',
        text:'No se pudo agregar',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
        
      }
      
    }


  
   const Hero = ()=>(<h1>Mis estudios</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
 
  	<div className="row card">
  	<div className="col card-body ">
  		<div className="form-group row ">

  		<div className="col-md-4">
  			<label htmlFor="">Institucion</label>
  			<input value={study.institution} onChange={(e)=>(readData(e))} className="form-control" name="institution" />
 			<ErrorTag name="institution"/>
 </div>
   		<div className="col-md-4">

 		<label htmlFor="">Estudios</label>
  			<input value={study.study} onChange={(e)=>(readData(e))} className="form-control" name="study" />
  			<ErrorTag name="study"/>

   </div>
   		<div className="col-md-2">

  		<label htmlFor="">Comienzo</label>
  			<input value={study.start} onChange={(e)=>(readData(e))} className="form-control" name="start" />
   			<ErrorTag name="start"/>
 
   </div>
   		<div className="col-md-2">

  		<label htmlFor="">Fin</label>
  			<input value={study.end} onChange={(e)=>(readData(e))} className="form-control" name="end" />
   			<ErrorTag name="end"/>
   			<small>Año/Trunca/Actual</small>

  </div>
  			 <div className="col-12 mt-3">
  			<BtnBack><Link href="/cv">Volver</Link> </BtnBack>
  			<button onClick={submit} className="btn btn-primary">Agregar </button>
  	
 		 	

  		</div>



  		</div>
	 	{studies.map((study,id)=>(<Study study={study} fn={deleteStudy} id={id} key={id} />))}

  		 
  		 
  	</div>
  	</div>

  </Layout>
  );
}



export default AddSkill;