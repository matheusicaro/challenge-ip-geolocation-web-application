class Geo {
  ip?: string;
  city?: string;
  country?: string;

  constructor(data: any) {
    if (data) {
      this.ip = data['ip'];
      this.country = data['country_name'];
      this.city = data['city'];
    }
  }
}

export default class ResponseGeolocationAPI {
  dateTime?: string;
  timezoneOffset?: number;
  timezone?: string;
  private geo?: Geo;

  constructor(data: any) {
    if (data) {
      this.dateTime = data['date_time_ymd'];
      this.timezone = data['timezone'];
      this.timezoneOffset = data['timezone_offset'];
      this.geo = new Geo(data['geo']);
    }
  }

  public get getContry(): string | undefined {
    return this.geo ? this.geo.country : undefined;
  }

  public get getCity(): string | undefined {
    return this.geo ? this.geo.city : undefined;
  }

  public get getIp(): string | undefined {
    return this.geo ? this.geo.ip : undefined;
  }
}
