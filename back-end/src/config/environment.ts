export default {
  BASE_PATH: process.env.BASE_PATH || '',
  GEOLOCATION_API_KEY: process.env.GEOLOCATION_API_KEY || '',
  GEOLOCATION_API_URL: process.env.GEOLOCATION_API_URL || '',
  HOST_NAME: process.env.HOST_NAME,
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || '')
};
