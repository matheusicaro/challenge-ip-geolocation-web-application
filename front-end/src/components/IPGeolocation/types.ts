import { State as StateClientIP } from '../../store/ducks/clientIP/types';

export type StateProps = {
  clientIp: StateClientIP;
};

export type DispatchProps = {
  loadRequest: () => void;
  loadSuccess: (ip: string) => void;
};

export type State = {
  fetch: GeolocationFetch;
  geolocationHoursDifference?: number;
};

export type GeolocationFetch = {
  errorMessage?: string;
  error: boolean;
  loading: boolean;
  data?: GeolocationIPs;
};

export type GeolocationIPs = {
  origin: {
    country: string;
    city: string;
    ip: string;
    localTime: Date;
    timeZone: string;
  };

  destiny: {
    country: string;
    city: string;
    ip: string;
    localTime: Date;
    timeZone: string;
  };
};
