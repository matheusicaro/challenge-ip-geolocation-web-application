import environment from '../../config/environment';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import ResponseGeolocationAPI from './responseGeolocationApi.model';
import HttpError from '../exceptions/httpError';

export default class GeolocationApi {
  private static instance: AxiosInstance;

  private static defaultConfig(): AxiosRequestConfig {
    return {
      baseURL: environment.GEOLOCATION_API_URL,
      timeout: 3000,
      params: {
        apiKey: environment.GEOLOCATION_API_KEY
      }
    };
  }

  public static async getGeolocation(ip: string): Promise<ResponseGeolocationAPI> {
    const config = this.defaultConfig();
    const url = config.baseURL;
    config.params.ip = ip;

    const response = await axios.get(`${url}/timezone`, config);

    if (!response || this.isHttpRequestSuccessful(response.status)) throw this.getHttpError<ResponseGeolocationAPI>(response);

    return new ResponseGeolocationAPI(response.data);
  }

  private static isHttpRequestSuccessful(statusCode: number): boolean {
    return statusCode < 200 || statusCode > 300;
  }

  private static getHttpError<T>(response: AxiosResponse<T>): HttpError {
    const statusCode = response ? response.status : null;
    const body = !response ? null : { data: response.data, request: response.request };
    return new HttpError(`Request failed: ${statusCode}`, body);
  }
}
