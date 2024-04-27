import http from './http';
import {
    SettingsIndexPost,
    SettingsIndexGet,
    SettingsDeleteGet,
    SettingsDeletePost,
    SettingsUpdateAliasGet,
    SettingsUpdateAliasPost,
    SettingsUpdatePasswordGet,
    SettingsUpdatePasswordPost
} from '../interface';
import { sha256 } from 'js-sha256';

const endpoint = '/settings';

export const SettingsMainService = async (payload: SettingsIndexPost) => {
    var response = await http.Post(endpoint + '/index.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: SettingsIndexGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const SettingsUpdateAliasService = async (payload: SettingsUpdateAliasPost) => {
    var response = await http.Post(endpoint + '/update_alias.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: SettingsUpdateAliasGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const SettingsUpdatePasswordService = async (payload: SettingsUpdatePasswordPost) => {
    const password = sha256(payload.password)
    var response = await http.Post(endpoint + '/update_password.php', undefined, {
      ...payload,
      password
    });
    if (response.status === 200) {
        const data: SettingsUpdatePasswordGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const SettingsDeleteService = async (payload: SettingsDeletePost) => {
    var response = await http.Post(endpoint + '/delete.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: SettingsDeleteGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}
