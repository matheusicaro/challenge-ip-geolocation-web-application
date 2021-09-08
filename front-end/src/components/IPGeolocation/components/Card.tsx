import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

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

  const country = geolocation?.country;
  const city = geolocation?.city;
  const timeZone = geolocation?.timeZone;

  return (
    <Container>
      <Paper className="paper-container" elevation={2} component="section">
        <Typography variant="body1" component="span">
          Contry: <Data validData={!!country}>{country || 'XXXX'}</Data>
        </Typography>
        <Typography variant="body1" component="span">
          City: <Data validData={!!city}>{city || 'XXXX'}</Data>
        </Typography>
        <Typography variant="body1" component="span">
          TimeZone: <Data validData={!!timeZone}>{timeZone || 'XXXX'}</Data>
        </Typography>
        <Typography variant="body1" component="span">
          Local Time: <Data validData={!!geolocation}>{localTime}</Data>
        </Typography>
      </Paper>
      <Typography variant="h6" component="h3">
        {footer}
      </Typography>
    </Container>
  );
};

export default Card;

const Container = styled.article`
  text-align: center;

  section {
    display: flex;
    flex-direction: column;
    padding: 5%;
    width: max-content;
    width: 90%;
  }
`;
const Data = styled.span<{ validData: boolean }>`
  text-align: center;

  opacity: ${(props) => (props.validData ? '1' : '0.4')};
  font-weight: ${(props) => (props.validData ? 'bold' : 'normal')};
`;
