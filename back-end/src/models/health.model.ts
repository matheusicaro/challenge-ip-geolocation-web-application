type HealthStatus = 'ONLINE' | 'FAILED';

export default class Health {
  status: HealthStatus;
  time: Date;

  constructor(status: HealthStatus, time: Date) {
    this.status = status;
    this.time = time;
  }
}
