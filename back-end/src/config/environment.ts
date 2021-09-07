export default {
  NODE_ENV: process.env.NODE_ENV,
  HOST_NAME: process.env.HOST_NAME,
  BASE_PATH: process.env.BASE_PATH || '',
  PORT: parseInt(process.env.PORT || '')
};
