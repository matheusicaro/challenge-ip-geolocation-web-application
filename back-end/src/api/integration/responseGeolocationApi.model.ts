type TimeZone = {
  name?: string;
  offset?: number;
  currentTime?: Date;
};

export default class ResponseGeolocationAPI {
  country?: string;
  city?: string;
  ip?: string;
  timeZone?: TimeZone;

  constructor(data: any) {
    if (data) {
      this.ip = data.ip;
      this.country = data['country_name'];
      this.city = data.city;
      this.timeZone = data['country_name'] as TimeZone;
    }
  }
}
