import { Logger } from '../../config/logger';
import GeolocationApi from '../integration/geolocationApi.integration';
import { Geolocation, IPGeolocation } from '../models';

export default class GeolocationService {
  public static async getIPGeolocation(originIp: string, destinyIp: string): Promise<IPGeolocation> {
    try {
      await new GeolocationApi().getIPGeolocation(originIp);
      const geolocation = new Geolocation('', '', '', new Date(), '');
      return new IPGeolocation(geolocation, geolocation);
    } catch (error) {
      Logger.error(error);
      throw new Error();
    }
  }
}
