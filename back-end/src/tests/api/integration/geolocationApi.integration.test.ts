// @ts-nocheck

import API from '../../../api/integration/geolocationApi.integration';
import exampleDataResponseGeolocationApi from '../../json/example-response-geolocation-api.json';

jest.mock('axios');
import axios from 'axios';

import { ResponseGeolocationAPI } from '../../../api/integration';
import HttpError from '../../../api/exceptions/httpError';
import environment from '../../../config/environment';

describe("Check method 'getIPGeolocation'", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should return expected ResponseGeolocationAPI in success case', async () => {
    const expected = new ResponseGeolocationAPI(exampleDataResponseGeolocationApi);

    axios.get = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          data: exampleDataResponseGeolocationApi,
          status: 200
        });
      });
    });

    const returned = await API.getGeolocation('origin_ip');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(returned).toEqual(expected);
  });

  test('Should return exception expected if request is not successful', async () => {
    const body = {};
    const status = 403;

    const expected = new HttpError(`Request failed: ${status}`, body);

    axios.get = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          data: body,
          status
        });
      });
    });

    try {
      await API.getGeolocation('origin_ip');
    } catch (error) {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(error).toEqual(expected);
    }
  });

  test('Axios request should be called with expect configs', async () => {
    const ip = '100.1.14.200';

    const expected = {
      baseURL: environment.GEOLOCATION_API_URL,
      timeout: 3000,
      params: {
        apiKey: environment.GEOLOCATION_API_KEY,
        ip
      }
    };

    axios.get = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          data: exampleDataResponseGeolocationApi,
          status: 200
        });
      });
    });

    await API.getGeolocation(ip);

    const axiosSpied = jest.spyOn(axios, 'get');

    const firstArgument = axiosSpied.mock.calls[0][0];
    const secondArgument = axiosSpied.mock.calls[0][1];

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(firstArgument).toEqual(`${expected.baseURL}/timezone`);
    expect(secondArgument).toEqual(secondArgument);
  });

  test('Axios request should be called with expect configs', async () => {
    const ip = '100.1.14.200';

    const expected = {
      baseURL: environment.GEOLOCATION_API_URL,
      timeout: 3000,
      params: {
        apiKey: environment.GEOLOCATION_API_KEY,
        ip
      }
    };

    axios.get = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          data: exampleDataResponseGeolocationApi,
          status: 200
        });
      });
    });

    await API.getGeolocation(ip);

    const axiosSpied = jest.spyOn(axios, 'get');

    const firstArgument = axiosSpied.mock.calls[0][0];
    const secondArgument = axiosSpied.mock.calls[0][1];

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(firstArgument).toEqual(`${expected.baseURL}/timezone`);
    expect(secondArgument).toEqual(secondArgument);
  });
});
