import React from 'react';

import { Geolocation } from '../types';

type Props = {
  geolocation?: Geolocation;
  loading?: boolean;
  footer: string;
};

const Card: React.FC<Props> = ({ geolocation, loading, footer }) => {
  const format = (number: number) => (number < 10 ? `0${number}` : number);

  const hours = geolocation ? format(geolocation.localTime.getHours()) : '00';
  const minutes = geolocation ? format(geolocation.localTime.getMinutes()) : '00';
  const seconds = geolocation ? format(geolocation.localTime.getSeconds()) : '00';

  const localTime = `${hours}:${minutes}:${seconds}`;

  return (
    <article>
      <section>
        <span>
          Contry: <span>{geolocation?.country || 'XXXX'}</span>
        </span>
        <span>
          City: <span>{geolocation?.city || 'XXXX'}</span>
        </span>
        <span>
          TimeZone: <span>{geolocation?.timeZone || 'XXXX'}</span>
        </span>
        <span>
          Local Time: <span>{localTime}</span>
        </span>
      </section>
      <h4>{footer}</h4>
    </article>
  );
};

export default Card;
