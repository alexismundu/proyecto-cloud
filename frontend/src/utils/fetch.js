export const queryAPI = async ({ getAccessTokenSilently, scope = '' }) => {
  const apiURI = `${process.env.REACT_APP_BACKEND_URL}/api/`;

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

    const resJSON = await res.json();
    return resJSON;
  } catch (e) {
    console.log(e.message);
  }
};
