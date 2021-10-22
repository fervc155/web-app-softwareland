import axios from 'axios';
import Token from '../auth/token';

const clienteAxios = axios.create({
    baseURL :  "https://morning-coast-45481.herokuapp.com"
});

const authAxios= axios.create({
    baseURL : "https://morning-coast-45481.herokuapp.com"
});
authAxios.defaults.headers.common['x-auth-token'] = Token.get() ;

export {
    authAxios
};
export default clienteAxios;