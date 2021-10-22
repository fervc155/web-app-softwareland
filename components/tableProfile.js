import react from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled'

 
const TableProfile = ({data})=>{
  
  return(
 <table css={css`font-size:14px`}>
 <tbody>
 		  		<tr>
 		  			<th>Nombre</th>
 		  			<td>{data.name}</td>
 		  		</tr>
 		  				<tr>
 		  			<th>Profesion</th>
 		  			<td>{data.profesion}</td>
 		  		</tr>
 		  		  		<tr>
 		  			<th>Web</th>
 		  			<td>{data.web}</td>
 		  		</tr>
 		  		  		<tr>
 		  			<th>Telefono</th>
 		  			<td>{data.phone}</td>
 		  		</tr>
 		  		  		<tr>
 		  			<th>Email</th>
 		  			<td>{data.email}</td>
 		  		</tr>
 		  			  		<tr>
 		  			<th>Sexo</th>
 		  			<td>{data.sex}</td>
 		  		</tr>

	  
	  		<tr>
 		  			<th>Direccion</th>
 		  			<td>{data.address}</td>
 		  		</tr>


 </tbody>
 		  		</table>
  );
}



export default TableProfile;