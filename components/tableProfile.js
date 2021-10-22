import react from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled'

const Tr = styled.tr`

	th{
		
	padding-right:1rem;
	}

 `;
const TableProfile = ({data})=>{
  
  return(
 <table css={css`font-size:14px`}>
 		  		<Tr>
 		  			<th>Nombre</th>
 		  			<td>{data.name}</td>
 		  		</Tr>
 		  				<Tr>
 		  			<th>Profesion</th>
 		  			<td>{data.profesion}</td>
 		  		</Tr>
 		  		  		<Tr>
 		  			<th>Web</th>
 		  			<td>{data.web}</td>
 		  		</Tr>
 		  		  		<Tr>
 		  			<th>Telefono</th>
 		  			<td>{data.phone}</td>
 		  		</Tr>
 		  		  		<Tr>
 		  			<th>Email</th>
 		  			<td>{data.email}</td>
 		  		</Tr>
 		  			  		<Tr>
 		  			<th>Sexo</th>
 		  			<td>{data.sex}</td>
 		  		</Tr>

	  
	  		<Tr>
 		  			<th>Direccion</th>
 		  			<td>{data.address}</td>
 		  		</Tr>


 		  		</table>
  );
}



export default TableProfile;