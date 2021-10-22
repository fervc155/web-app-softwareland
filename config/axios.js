import axios from 'axios';
import Token from '../auth/token';

const clienteAxios = axios.create({
    baseURL : 'http://localhost:4000'
});

const authAxios= axios.create({
    baseURL : 'http://localhost:4000'
});
authAxios.defaults.headers.common['x-auth-token'] = Token.get() ;

export {
    authAxios
};
export default clienteAxios;