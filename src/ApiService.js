const API_URL = 'https://exceed-todo-list.herokuapp.com/api/v1/todos'
const API_KEY = "802ede49-5af8-4bcb-a8c7-d4f8da06f0a2"

export const getAll = () => {
  return fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      apikey: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};

export const sendRequest = async (url, method) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: method,
    headers: {
      apikey: API_KEY,
    },
  });
  return await response.json();
};

export const postTodo = async (url = "", data = {}, method) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    },
    body: JSON.stringify(data),
  });
  return await response.json(); // parses JSON response into native JavaScript objects
};