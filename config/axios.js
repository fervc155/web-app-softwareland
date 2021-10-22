import axios from 'axios';
import Token from '../auth/token';

const clienteAxios = axios.create({
    baseURL : process.env.backurl
});

const authAxios= axios.create({
    baseURL : process.env.backurl
});
authAxios.defaults.headers.common['x-auth-token'] = Token.get() ;

export {
    authAxios
};
export default clienteAxios;