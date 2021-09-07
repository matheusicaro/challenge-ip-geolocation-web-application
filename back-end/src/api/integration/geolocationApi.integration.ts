import ResponseGeolocationAPI from './responseGeolocationApi.model';

export default class GeolocationApi {
  public static async getGeolocation(ip: string): Promise<ResponseGeolocationAPI> {
    return new Promise((resolve, reject) => {
      resolve(new ResponseGeolocationAPI({}));
    });
  }
}
