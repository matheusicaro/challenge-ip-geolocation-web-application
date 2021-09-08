import environment from '../../config/environment';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import ResponseGeolocationAPI from './responseGeolocationApi.model';
import HttpError from '../exceptions/httpError';

export default class GeolocationApi {
  private static instance: AxiosInstance;
  /**
   * Method intended to return default request configuration for external service.
   * @returns AxiosRequestConfig
   */
  private static defaultConfig(): AxiosRequestConfig {
    return {
      baseURL: environment.GEOLOCATION_API_URL,
      timeout: 3000,
      params: {
        apiKey: environment.GEOLOCATION_API_KEY
      }
    };
  }

  /**
   * Method designed to integrate with an external geolocation service.
   *
   * @param  {string} ip
   * @returns Promise
   */
  public static async getGeolocation(ip: string): Promise<ResponseGeolocationAPI> {
    const config = this.defaultConfig();
    const url = config.baseURL;
    config.params.ip = ip;

    const response = await axios.get(`${url}/timezone`, config);

    if (!response || this.isHttpRequestSuccessful(response.status)) throw this.getHttpError<ResponseGeolocationAPI>(response);

    return new ResponseGeolocationAPI(response.data);
  }

  /**
   * Method intended to validate if statusCode received represents a success in the request.
   *
   * @param  {number} statusCode
   * @returns boolean
   */
  private static isHttpRequestSuccessful(statusCode: number): boolean {
    return statusCode < 200 || statusCode > 300;
  }

  /**
   * Method responsible for returning expected exception for integration errors with external service.
   *
   * @param  {AxiosResponse<T>} response
   * @returns HttpError: custom exception for failures in integration with external HTTP API.
   */
  private static getHttpError<T>(response: AxiosResponse<T>): HttpError {
    const statusCode = response ? response.status : null;
    const body = !response ? null : { data: response.data, request: response.request };
    return new HttpError(`Request failed: ${statusCode}`, body);
  }
}
