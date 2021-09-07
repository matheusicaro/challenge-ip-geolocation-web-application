export default class Geolocation {
  country: string;
  city: string;
  ip: string;
  localTime: Date;
  timeZone: string;

  constructor(ip: string, country: string, city: string, localTime: Date, timeZone: string) {
    this.country = country;
    this.city = city;
    this.ip = ip;
    this.localTime = localTime;
    this.timeZone = timeZone;
  }
}
