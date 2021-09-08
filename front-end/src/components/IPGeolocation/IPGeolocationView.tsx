import React from 'react';

import { ControllableInput, EditableInput } from '..';

type Props = {
  handleEditClientIP: (value: string) => void;
  clientIP: string;
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
        onClickButton={props.handleEditClientIP}
        labelButton="Show"
      />
    </div>
  );
};

export default IPGeolocationView;
