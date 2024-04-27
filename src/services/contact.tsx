import http from './http';
import { ContactIndexPost,
        ContactIndexGet,
        ContactItemPost,
        ContactItemGet,
        ContactNewPost,
        ContactNewGet,
        ContactUpdatePost,
        ContactUpdateGet } from '../interface';

const endpoint = '/contact';

export const ContactMainService = async (payload: ContactIndexPost) => {
    var response = await http.Post(endpoint + '/index.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ContactIndexGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const ContactItemService = async (payload: ContactItemPost) => {
    var response = await http.Post(endpoint + '/item.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ContactItemGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const ContactNewService = async (payload: ContactNewPost) => {
    var response = await http.Post(endpoint + '/new.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ContactNewGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const ContactUpdateService = async (payload: ContactUpdatePost) => {
    var response = await http.Post(endpoint + '/update.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ContactUpdateGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}
