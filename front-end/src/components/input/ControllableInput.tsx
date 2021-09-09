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

/**
 * Controllable generic component to be used in the application.
 *
 */
const ControllableInput: React.FC<StateProps> = (props) => {
  const [value, setValue] = React.useState(props.startValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickButton = () => {
    value && props.onClickButton(value);
  };

  return (
    <form className='input-container' noValidate autoComplete="off">
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        multiline
        value={value}
        onChange={handleChange}
        variant="outlined"
      />

      <Button variant="contained" disabled={!value || props.buttonDisabled} color="primary" disableElevation onClick={onClickButton}>
        {props.labelButton}
      </Button>
    </form>
  );
};

export default ControllableInput;
