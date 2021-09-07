import ResponseGeolocationAPI from './responseGeolocationApi.model';

export default class GeolocationApi {
  private url: string;

  constructor() {
    this.url = '';
  }

  public async getIPGeolocation(ip: string): Promise<ResponseGeolocationAPI> {
    return new Promise((resolve, reject) => {
      resolve(new ResponseGeolocationAPI({}));
    });
  }
}
