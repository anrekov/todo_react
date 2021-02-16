export const sendRequest = async (url, method, data) => {
  const token = localStorage.getItem('token');

  // try {
  //   const response = await fetch(url, {
  //     method: method,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token,
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   return await response.json();
  // } catch (err) {
  //   console.log('err', err);
  //   return err;
  // }

  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log('err in ser', err));
};
