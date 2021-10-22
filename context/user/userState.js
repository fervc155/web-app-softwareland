import  React, {useReducer} from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import type from './type';
import Token from '../../auth/token';

const UserState = ({children})=>{
  
  //initialState

    const initialState={
    	user:false,
    	token:false,
      
    };


  //useReducer


  const login = (token)=>{
  	dispatch({
  	  type:type.login,
  	  payload:token
  	});

  	
    
  }

  const logout= ()=>{
  
    dispatch({
  	  type:type.logout,
  	});

  }

  const checkLogin = ()=>{
  	const token = Token.get();

  	if(!token){
  		return false;
  		logout() 
  	}


  	 
  	if (Date.now() >= Token.json().exp * 1000) {
  	  	logout() 
		return false;

  	} 

  	login(token);
  	return true;

  }


  const [state,dispatch]= useReducer(UserReducer,initialState);
 
 
 
  return(<UserContext.Provider
      value={{
      	user:state.user,
      	token:state.token,

      	login,
      	logout,
      	checkLogin
        
       }}>
        {children}
       </UserContext.Provider>
    )
}

export default UserState;