import Router from 'next/router'

export default function	(isLogin){
	 


	if(isLogin){
		switch(Router.router.asPath){

			case '/register':
			case '/login':
				Router.push('/cv')
			break;
			default:
				break;

		}


	}else{
		switch(Router.router.asPath){
			case '/change-password':
			case '/cv':
			case '/profile':
			case '/add-skill':
			case '/add-study':
			case '/add-job':
				Router.push('/login')
			break;
			default:
				break;

		}

	}
	
 


}