import React from 'react';

import Alert from '@material-ui/lab/Alert/Alert';

import { ControllableInput, EditableInput, SpinLoading } from '..';

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
    <div>
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

      <section>
        <Card geolocation={props.geolocationFetch?.data?.origin} loading={props.geolocationFetch?.loading} footer="Your Location" />
        <Card geolocation={props.geolocationFetch?.data?.destiny} loading={props.geolocationFetch?.loading} footer="Location Informed" />
      </section>

      <section>Total Hours Difference = {props.hoursDifference === undefined ? 'XX' : props.hoursDifference} </section>

      {props.geolocationFetch?.loading && <SpinLoading />}

      {props.geolocationFetch?.error && (
        <Alert severity="warning">
          {props.geolocationFetch.errorMessage || MESSAGES.REQUEST_API_FAILED}
        </Alert>
      )}
    </div>
  );
};

export default IPGeolocationView;
