import react from 'react';

const Job = ({job,id,fn})=>{
  const click = ()=>{

  
    if(fn)
      fn(job,id);
  }

  return(
  <div  className="row justify-content-between">
  <div className="col-9">
    <h5 className="job">{job.job}</h5>

  <h5 className="institution">{fn && (<button className="btn-primary btn-icon" onClick={click}>X</button>)}{job.institution}</h5>
 </div>
  
      <div className="col-3 text-center text-md-right">

   <h5 className="year">{job.start} - {job.end} </h5>

  </div>
  </div>

  );
}



export default Job;