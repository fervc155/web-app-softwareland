import React,{useState,useEffect} from 'react';
import Study from '../components/study';
import Job from '../components/job';
import Skills from '../components/skills';
import TableProfile from '../components/TableProfile';
import Link from 'next/link';
import styled from '@emotion/styled';
import {BtnAdd } from '../components/layout/ui';
import Photo from '../components/Photo';


const Cv = ({data,edit})=>{

	  
 
  return(
  	  <div className="row">

 		 <div className="col-md-4">
 		 <div className="card">
 	 
 		 	 <Photo className="card-img-top"  src={data.photo ||''}/>

 		 
 		  		 <div className="card-body">
 		  		 <h5 className="card-title">{data.name}</h5>
 		  		

 		  		<TableProfile data={data}/>

 		  		 		 		 {edit? (<BtnAdd ><Link href="/add-skill">Agregar</Link></BtnAdd>):null}  

 		  		 <h5 className="card-title">Skills</h5>

 		  		 <Skills skills={data.skills} />

 		 </div>
 		 </div>

 		 </div>
 		 		 <div className="col-md-8">
 		  		 

 		 		 <div className="card mb-3">

 		 		
 		 		 <div className="card-body">
 		 		  <h5 className="card-title">Acerca de mi</h5>
 		 		 {data.about}</div>
 		 		 </div>

 		 		 <div className="card mb-3">
 		  		 

 		 		  <div className="card-body">
 		 		   		 		{edit? (<BtnAdd ><Link href="/add-study">Agregar</Link></BtnAdd>):null}   

 		 		  <h5 className="card-title">Estudios</h5>
 		 		 	{data.studies.map((study,id)=>(<Study study={study} key={id} />))}

 		 		 </div>
 		 		 </div>

 		 		 	 <div className="card mb-3">
 		  		 

 		 		  <div className="card-body">
 		 		   {edit? (<BtnAdd ><Link href="/add-job">Agregar</Link></BtnAdd>):null}
 		 		  <h5 className="card-title">Experiencia</h5>
 		 		 
 		 		 	{data.experience.map((job,id)=>(<Job job={job} key={id} />))}

 		 		 </div>
 		 		 </div>

 		 </div>
 		 </div> 
  );
}



export default Cv;