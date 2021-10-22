import react,{useState} from 'react';

const useError = ()=>{

	const [errorstate,setError] = useState([]);


  
  const ErrorTag = ({name})=>{


  	if(errorstate[name])
  		return (<div className="alert alert-danger"  >{errorstate[name]}</div>)
    else
    	return null;
  }


  return [ErrorTag,setError];
}



export default useError;