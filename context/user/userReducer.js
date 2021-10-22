import userType from './type';
import Token from '../../auth/token';
 
export default (state,{type,payload})=>{
  
  switch(type){
    
    case userType.login:

      Token.set(payload);
      return {
        ...state,
        user:Token.json(),
        token:Token.get()
      };
      break;
    case userType.logout:


	  Token.destroy();
      return {
        ...state,
        user:false,
        token:false
      };
      break;
    

    default:
      return state;
  
  }
};