import { Geolocation } from '.';

export default class IPGeolocation {
  origin: Geolocation;
  destiny: Geolocation;

  constructor(origin: Geolocation, destiny: Geolocation) {
    this.origin = origin;
    this.destiny = destiny;
  }
}
