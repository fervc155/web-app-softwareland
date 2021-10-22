import React from 'react';

const Study = ({study,id,fn})=>{
    const click = ()=>{

      if(fn)
        fn(study,id);
    }

  return(
  <div  className="row justify-content-between">
  <div className="col-9">
  <h5 className="job">{fn && (<button className="btn-primary btn-icon" onClick={click}>X</button>)}{study.study}</h5>

    <h5 className="institution">{study.institution}</h5>
    </div>
    <div className="col-3 text-center text-md-right">
  <h5 className="year">{study.start} - {study.end} </h5>

  </div>
  </div>

  );
}



export default Study;