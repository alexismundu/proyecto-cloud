require('dotenv').config();

const fetch = require('node-fetch');


const LOGGER_URL = process.env.LOGGER_URL;
const logg_into_cloud = async (log_text) => {

  if (!LOGGER_URL) return;

  fetch(`${LOGGER_URL}/log`, {
    method: 'POST',
    body: JSON.stringify({ log_text }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log(`response`, response)
      if (!response.ok) throw new Error(response.statusText);
      console.log(`Log saved successfully`, response)
    })
    .catch(error =>
      console.warn(`Unable to add the log: ${error.message}`)
    );
};

module.exports = { logg_into_cloud };