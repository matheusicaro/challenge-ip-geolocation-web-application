import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

type StateProps = {
  labelButton: string;
  label: string;
  onClickButton: (value: string) => void;
  placeholder?: string;
  startValue?: string;
  buttonDisabled: boolean;
};

const ControllableInput: React.FC<StateProps> = (props) => {
  const [value, setValue] = React.useState(props.startValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickButton = () => {
    value && props.onClickButton(value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="filled-multiline-flexible"
        label={props.label}
        placeholder={props.placeholder}
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="filled"
      />

      <Button variant="contained" disabled={!value || props.buttonDisabled} color="primary" disableElevation onClick={onClickButton}>
        {props.labelButton}
      </Button>
    </form>
  );
};

export default ControllableInput;
