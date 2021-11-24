const baseApiURI = `${process.env.REACT_APP_BACKEND_URL}/api/`;

export const queryAPI = async ({
  getAccessTokenSilently,
  restURI = '',
  scope = '',
}) => {
  const apiURI = `${baseApiURI}${restURI}`;

  try {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_BACKEND_URL,
      scope,
    });

    const res = await fetch(apiURI, {
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (!res.ok) return;
    const resJSON = await res.json();
    return resJSON;
  } catch (e) {
    console.log(e.message);
  }
};

export const queryUserProperties = async ({
  getAccessTokenSilently,
  userId,
}) => {
  return await queryAPI({
    getAccessTokenSilently,
    restURI: `users/${userId}/properties`,
  });
};
