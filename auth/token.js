import jwt_decode from "jwt-decode";

let token = {
	get:()=>false,
	json:()=>false,
	set:()=>false,
	destroy:()=>false,
}
if (typeof window !== 'undefined') {
	 token ={

		get:()=>{
			return localStorage.getItem('token') || false;
		},
		json:()=>{
			return jwt_decode(localStorage.getItem('token'))
		},
		set:(token)=> localStorage.setItem('token', token),
		destroy:()=>localStorage.removeItem('token'),
	}
}

export default  token ;