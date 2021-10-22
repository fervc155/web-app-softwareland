import react from 'react';
import styled from '@emotion/styled';
import TableProfile from './tableProfile';
import Link from 'next/link';
import Photo from '../components/Photo';


const Button = styled.span`
 width:100%;
 margin-top:1rem;

 a{
   width:100%;
   &:hover{
     color:white;
   }
 }


 `;
const Cvs = ({cv})=>{
  
  return(
  	<div className="col-md-6 col-lg-4">
  <div className="card">

     <Photo className="card-img-top"  src={cv.photo || ''} /> 
  	 	    
  	 
  	<div className="card-body">
  		<h5 className="card-title">{cv.name}</h5>
      <TableProfile data={cv} />

  		<Link href={`/cv/${cv.email || ''}`}><Button className="btn btn-primary"> Ver CV</Button></Link>
  	</div>

  </div>
  </div>
  );
}



export default Cvs;