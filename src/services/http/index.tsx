export const baseUrl = 'https://dongkye.tech/rrm_mobile';

const Get = async (url: string, token?: string | undefined) => {
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
  return fetch(baseUrl + url, options);
};

const Post = async (url: string, token?: string | undefined, data?: any) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options);
};

const Patch = async (url: string, token?: string | undefined, data?: any) => {
  const options = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options);
};

const Delete = async (url: string, token?: string | undefined, data?: any) => {
  const options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options);
};

export default {Get, Post, Patch, Delete};
