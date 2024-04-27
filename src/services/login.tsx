import { sha256 } from 'js-sha256';
import http from './http';
import { LoginPost, LoginGet, RegisterPost, RegisterGet } from '../interface';

const endpoint = '/login';

export const LoginService = async (payload: LoginPost) => {
    const password = sha256(payload.password);
    var response = await http.Post(endpoint + '/login.php', undefined, {
      ...payload,
      password,
    });
    if (response.status === 200) {
        const data: LoginGet = await response.json();
        return data.success;
    } else {
        return null;
    }
}

export const RegisterService = async (payload: RegisterPost) => {
    const password = sha256(payload.password);
    var response = await http.Post(endpoint + '/register.php', undefined, {
        ...payload,
        password,
    });
    if (response.status === 200) {
        const data: RegisterGet = await response.json();
        return data.success;
    } else {
        return null;
    }
}
