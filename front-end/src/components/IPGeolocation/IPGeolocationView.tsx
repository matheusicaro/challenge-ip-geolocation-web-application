import React from 'react';

import { ControllableInput, EditableInput } from '..';

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
      />
    </div>
  );
};

export default IPGeolocationView;
