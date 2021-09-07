import { Logger } from '../../config/logger';
import { MESSAGES } from '../constants';
import { GenericError, ErrorResponse, HttpStatusCode } from '../exceptions';
import GeolocationApi from '../integration/geolocationApi.integration';
import ResponseGeolocationAPI from '../integration/responseGeolocationApi.model';
import { Geolocation, IPGeolocation } from '../models';

export default class GeolocationService {
  public static async getIPGeolocation(originIp: string, destinyIp: string): Promise<IPGeolocation> {
    try {
      const originData = await this.getGeolocationResponse(originIp);

      if (this.wasNotFoundGeolocation(originData)) throw this.getNotFoundErrorResponseExeption(originIp);

      const destinyData = await this.getGeolocationResponse(destinyIp);

      if (this.wasNotFoundGeolocation(destinyData)) throw this.getNotFoundErrorResponseExeption(destinyIp);

      return new IPGeolocation(this.buildGeolocation(originData), this.buildGeolocation(destinyData));
    } catch (error) {
      if (error instanceof ErrorResponse) throw error;

      throw new GenericError(error);
    }
  }

  private static async getGeolocationResponse(ip: string): Promise<ResponseGeolocationAPI> {
    try {
      return await GeolocationApi.getGeolocation(ip);
    } catch (error) {
      Logger.error(error);
      throw new ErrorResponse(MESSAGES.EXTERNAL_ERROR, HttpStatusCode.UNPROCESSABLE);
    }
  }

  private static wasNotFoundGeolocation(response: ResponseGeolocationAPI): boolean {
    const invalidDates = (): boolean => !response.dateTime || !response.timezoneOffset || !response.timezone;
    const invalidGeo = (): boolean => !response.getIp || !response.getCity || !response.getContry;

    return !response || invalidDates() || invalidGeo();
  }

  private static buildGeolocation(response: ResponseGeolocationAPI): Geolocation {
    const timezone = `${response.timezone} (GTM${response.timezoneOffset})`;

    // rules were disabled because they were already tested in 'wasNotFoundGeolocation()'
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore: Object is possibly 'null'.
    return new Geolocation(response.getIp, response.getContry, response.getCity, response.dateTime, timezone);
  }

  private static getNotFoundErrorResponseExeption(originIp: string): ErrorResponse {
    return new ErrorResponse(`No data was found for the IP informed: ${originIp}`, HttpStatusCode.NOT_FOUND);
  }
}
