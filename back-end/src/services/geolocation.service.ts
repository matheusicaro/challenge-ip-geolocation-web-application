import { Logger } from '../config/logger';
import { Geolocation, IPGeolocation } from '../models';

export default class GeolocationService {
  public static async getIPGeolocation(originIp: string, destinyIp: string): Promise<IPGeolocation> {
    try {
      const geolocation = new Geolocation('12312', 'conty', 'test', new Date(), 'sfdsfsadfds');

      return new IPGeolocation(geolocation, geolocation);
    } catch (error) {
      Logger.error(error);
      throw new Error();
    }
  }
}
