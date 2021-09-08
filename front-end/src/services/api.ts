import axios, { AxiosRequestConfig } from 'axios';

import environments from '../environments';

const API = axios.create({
  baseURL: environments.baseURL,
});

const getConfig = (headers = {}) => {
  return {
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  };
};

const delay = (start: number, callback: () => void) => {
  const DELAY_SECONDS = 1500;
  const applyDelay = Date.now() - start < DELAY_SECONDS;

  if (applyDelay) setTimeout(() => callback(), DELAY_SECONDS);
  else callback();
};

const post = async <T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<{ status: number; data: T; message?: string }> => {
  const start = Date.now();

  return new Promise((resolve, reject) => {
    API.post(path, data, config)
      .then((res) => delay(start, () => resolve({ status: res.status, data: res.data })))
      .catch((error) => delay(start, () => reject({ status: error?.response?.status, message: error?.response?.data?.message })));
  });
};

export type GeolocationResponseApi = {
  origin: {
    country: string;
    city: string;
    ip: string;
    localTime: string;
    timeZone: string;
  };

  destiny: {
    country: string;
    city: string;
    ip: string;
    localTime: string;
    timeZone: string;
  };
};

export default {
  getGeolocationIP: (origin: string, destiny: string) => post<GeolocationResponseApi>('/geolocation', { origin, destiny }, getConfig()),
};
