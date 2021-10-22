import react from 'react';
import styled from '@emotion/styled';



const Badge = styled.button`

font-size:10px;
background-color:#0B0044;
border-radius:100px;
padding: 5px 10px;
color:white;
margin-right:16px



 `;
const Skills = ({skills,fn})=>{

	const click = (skill,id)=>{

		if(fn)
			fn(skill,id);
	}

  
  return(
  <div>
{skills.map((skill,id)=>(<Badge key={id} onClick={()=>click(skill,id)} >{skill}</Badge>))}

  </div>
  );
}



export default Skills;