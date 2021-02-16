import { sendRequest } from './ApiService';
// подключается к прокси серверу: http://localhost:8080, а затем добавляет эту часть
const USERS_URL = '/api/users';

export const postUsers = (data = {}) => {
  return sendRequest(`${USERS_URL}`, 'POST', data)
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const getUsers = () => {
  return sendRequest(`${USERS_URL}`, 'GET')
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const login = (data = {}) => {
  return sendRequest(`${USERS_URL}/login`, 'POST', data)
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const userInfo = () => {
  return sendRequest(`${USERS_URL}/info`, 'GET')
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};

export const editInfo = (data = {}) => {
  return sendRequest(`${USERS_URL}/edit`, 'PUT', data)
    .then((response) => response)
    .catch((err) => console.log('Fetch Error :-S', err));
};
