import React,{useState,useEffect} from 'react';
import Layout from '../components/layout/layout'
import {BtnBack} from '../components/layout/ui'
import Skills from '../components/skills'
import Link from 'next/link';
import Swal from 'sweetalert2';
import Router from 'next/router';
import {authAxios} from '../config/axios';

 const AddSkill = (props)=>{

 	  useEffect(()=>{
    
    const sendData = async ()=>{
      try{
        const result = await authAxios.get('/cv');
        setSkills(result.data.skills);

 
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

const [skills,setSkills]=useState([]);
const [skill,setSkill]= useState('');

	const deleteSkill = (skillparam,id)=>{

		let tempSkills = skills.filter(skillfilter=>skillfilter!==skillparam);
		updateSkill(tempSkills)
	  
	}

	const submit = ()=>{

		if(skill.trim()==='')
	  	return;

	 

	 
	  const tempSkills = [
	  		...skills,
	  		skill
	  ]
    updateSkill(tempSkills)
	}

	 const updateSkill = async (skillsparam)=>{


      try{
      	const dataSkills = {'skills': skillsparam}
        const result = await authAxios.put('update',dataSkills)
      
      	setSkills(result.data.skills);
				setSkill('')
      }catch(error){
        Swal.fire({
        title: 'Error!',
        text:'No se pudo agregar',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
        
      }
      
    }

  
  const Hero = ()=>(<h1>Mis habilidades</h1>)
  return (
    
      
     
        <Layout Hero={Hero}  >
  	<div className="row card">
  	<div className="col card-body ">
  		<div className="form-group ">
  			<label htmlFor="">Agregar nueva skill</label>
  			<input value={skill} onChange={(e)=>(setSkill(e.target.value))} className="form-control" name="skill" />
  			 <div className="mt-3">
  			<BtnBack><Link href="/cv">Volver</Link> </BtnBack>
  			<button onClick={submit} className="btn btn-primary">Agregar </button>
  		</div>
  		</div>

  		<h6>Da Click en una skill para eliminarla</h6>

  		<Skills skills={skills}  fn={deleteSkill} />
  	</div>
  	</div>

  </Layout>
  );
}



export default AddSkill;