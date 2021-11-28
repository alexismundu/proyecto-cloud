const baseApiURI = `${process.env.REACT_APP_BACKEND_URL}/api/`;

export const fetchAPI = async ({
  getAccessTokenSilently,
  restURI = '',
  scope = '',
  method = 'GET',
  data = '',
}) => {
  const apiURI = `${baseApiURI}${restURI}`;

  try {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_BACKEND_URL,
      scope,
    });

    const options = {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    if (method === 'POST' || method === 'PUT') {
      options['body'] = JSON.stringify(data);
    }

    const res = await fetch(apiURI, options);

    if (!res.ok) return;
    const resJSON = await res.json();
    return resJSON;
  } catch (e) {
    console.log(e.message);
  }
};

export const postAPI = async (attributes) => {
  return await fetchAPI({ ...attributes, method: 'POST' });
};

export const putAPI = async (attributes) => {
  return await fetchAPI({ ...attributes, method: 'PUT' });
};

export const deleteAPI = async (attributes) => {
  return await fetchAPI({ ...attributes, method: 'DELETE' });
};

export const queryUserProperties = async ({
  getAccessTokenSilently,
  userId,
}) => {
  return await fetchAPI({
    getAccessTokenSilently,
    restURI: `users/${userId}/properties`,
  });
};

export const createPropertyInDb = async ({
  getAccessTokenSilently,
  data,
  userId,
}) => {
  const res = await postAPI({
    getAccessTokenSilently,
    data,
    restURI: `users/${userId}/properties`,
  });
  console.log(res);
  return res;
};

export const updatePropertyInDb = async ({
  getAccessTokenSilently,
  old_data,
  new_data,
  userId,
}) => {
  const res = await putAPI({
    getAccessTokenSilently,
    data: new_data ,
    restURI: `users/${userId}/checkProperty/${old_data.id}`,
  });
  console.log(res);
  return res;
};

export const deletePropertyInDb = async ({
  getAccessTokenSilently,
  data,
  userId,
}) => {
  const res = await deleteAPI({
    getAccessTokenSilently,
    data,
    restURI: `users/${userId}/property/${data.id}`,
  });
  console.log(res);
  return res;
};
