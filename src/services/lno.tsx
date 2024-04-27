import http from './http';
import {
    LnoDeletePost,
    LnoDeleteGet,
    LnoGetContactsPost,
    LnoGetContactsGet,
    LnoIndexPost,
    LnoIndexGet,
    LnoItemPost,
    LnoItemGet,
    LnoLead,
    LnoOppo,
    LnoNewPost,
    LnoNewGet,
    LnoNewOppoPost,
    LnoNewOppoGet,
    LnoOppoDeletePost,
    LnoOppoDeleteGet,
    LnoOppoInfoPost,
    LnoOppoInfoGet,
    LnoOppoUpdatePost,
    LnoOppoUpdateGet,
    LnoUpdatePost,
    LnoUpdateGet
} from '../interface';

const endpoint = '/lno';

export const LnoDeleteService = async (payload: LnoDeletePost) => {
    var response = await http.Post(endpoint + '/delete.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoDeleteGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const LnoGetContactsService = async (payload: LnoGetContactsPost) => {
    var response = await http.Post(endpoint + '/get_contacts.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoGetContactsGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const LnoMainService = async (payload: LnoIndexPost) => {
    var response = await http.Post(endpoint + '/index.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoIndexGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const LnoItemService = async (payload: LnoItemPost) => {
    var response = await http.Post(endpoint + '/item.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoItemGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const LnoNewService = async (payload: LnoNewPost) => {
    var response = await http.Post(endpoint + '/new.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoNewGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const LnoNewOppoService = async (payload: LnoNewOppoPost) => {
    var response = await http.Post(endpoint + '/new_oppo.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoNewOppoGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const LnoDeleteOppoService = async (payload: LnoOppoDeletePost) => {
    var response = await http.Post(endpoint + '/oppo_delete.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoOppoDeleteGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const LnoOppoInfoService = async (payload: LnoOppoInfoPost) => {
    var response = await http.Post(endpoint + '/oppo_info.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoOppoInfoGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const LnoOppoUpdateService = async (payload: LnoOppoUpdatePost) => {
    var response = await http.Post(endpoint + '/oppo_update.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoOppoUpdateGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const LnoUpdateService = async (payload: LnoUpdatePost) => {
    var response = await http.Post(endpoint + '/update.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: LnoUpdateGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}
