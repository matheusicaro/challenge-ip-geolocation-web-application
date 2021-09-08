import React, { Fragment } from 'react';

import { Paper, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert/Alert';

import { ControllableInput, EditableInput, SpinLoading } from '..';

import styled from 'styled-components';

import { MESSAGES } from '../../constants';

import Card from './components/Card';
import { GeolocationFetch } from './types';

type Props = {
  handleGeolocationFetch: (destinyIp: string) => void;
  handleEditClientIP: (value: string) => void;
  clientIP: string;
  geolocationFetch?: GeolocationFetch;
  hoursDifference?: number;
};

const IPGeolocationView: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <EditableInput
        label="My IP Address"
        placeholder="Example: 10.255.255.255"
        onClickSaveNewValue={props.handleEditClientIP}
        startValue={props.clientIP}
      />

      <ControllableInput
        label="Enter the IP Address of destiny"
        placeholder="Example: 10.255.255.255"
        onClickButton={props.handleGeolocationFetch}
        labelButton="Show"
        buttonDisabled={!!props.geolocationFetch && props.geolocationFetch.loading}
      />

      <CardsContainer>
        <Card geolocation={props.geolocationFetch?.data?.origin} loading={props.geolocationFetch?.loading} footer="Your Location" />
        <Card geolocation={props.geolocationFetch?.data?.destiny} loading={props.geolocationFetch?.loading} footer="Location Informed" />
      </CardsContainer>

      <Paper id="hours-difference" className="paper-container" elevation={2} component="section">
        <Typography variant="body1" component="span">
          Total Hours Difference = {props.hoursDifference === undefined ? 'XX' : props.hoursDifference}{' '}
        </Typography>
      </Paper>

      <section id="info-container">
        {props.geolocationFetch?.loading && <SpinLoading />}

        {props.geolocationFetch?.error && (
          <Alert severity="warning">{props.geolocationFetch.errorMessage || MESSAGES.REQUEST_API_FAILED}</Alert>
        )}
      </section>
    </Fragment>
  );
};

export default IPGeolocationView;

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
`;
