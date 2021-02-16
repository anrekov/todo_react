import { sendRequest } from './ApiService';

const TODOS_URL = '/api/todos';

export const getAll = () => {
  return sendRequest(`${TODOS_URL}`, 'GET')
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const postTodo = (url, data = {}, method) => {
  return sendRequest(`${TODOS_URL}${url}`, method, data)
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const sendRequestTodo = (url, method) => {
  return sendRequest(`${TODOS_URL}${url}`, method)
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};
