import React from 'react';

import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Edit as EditIcon, Done as SaveIcon } from '@material-ui/icons';

type StateProps = {
  label: string;
  placeholder?: string;
  startValue?: string;
  onClickSaveNewValue: (value: string) => void;
};

const EditableInput: React.FC<StateProps> = (props) => {
  const [value, setValue] = React.useState(props.startValue);
  const [editButtonEnable, setEditButtonEnable] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnableEditButton = () => setEditButtonEnable(!editButtonEnable);

  const saveNewValue = () => {
    handleEnableEditButton();
    value && props.onClickSaveNewValue(value);
  };

  return (
    <form className='input-container' noValidate autoComplete="off">
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />

      {editButtonEnable && (
        <IconButton aria-label="delete" disabled={!editButtonEnable} color="primary" onClick={handleEnableEditButton}>
          <EditIcon />
        </IconButton>
      )}

      {!editButtonEnable && (
        <IconButton aria-label="delete" color="primary" disabled={!value} onClick={saveNewValue}>
          <SaveIcon />
        </IconButton>
      )}
    </form>
  );
};

export default EditableInput;
