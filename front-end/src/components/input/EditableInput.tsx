import React from 'react';

import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Edit as EditIcon, Done as SaveIcon } from '@material-ui/icons';
import styled from 'styled-components';

type StateProps = {
  autoFocus?: boolean;
  label: string;
  onClickSaveNewValue: (value: string) => void;
  placeholder?: string;
  startValue?: string;
};

const EditableInput: React.FC<StateProps> = (props) => {
  const [value, setValue] = React.useState(props.startValue);
  const [editModeEnabled, setEditModeEnabled] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnableEditButton = () => setEditModeEnabled(!editModeEnabled);

  const saveNewValue = () => {
    handleEnableEditButton();
    value && props.onClickSaveNewValue(value);
  };

  return (
    <Container editModeEnabled={editModeEnabled} className="input-container" noValidate autoComplete="off">
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="outlined"
        autoFocus={props.autoFocus}
        disabled={editModeEnabled}
      />

      {editModeEnabled && (
        <IconButton aria-label="delete" disabled={!editModeEnabled} color="primary" onClick={handleEnableEditButton}>
          <EditIcon />
        </IconButton>
      )}

      {!editModeEnabled && (
        <IconButton aria-label="delete" color="primary" disabled={!value} onClick={saveNewValue}>
          <SaveIcon />
        </IconButton>
      )}
    </Container>
  );
};

export default EditableInput;

const Container = styled.form<{ editModeEnabled: boolean }>`
  fieldset {
    border-color: ${({ editModeEnabled }) => (!editModeEnabled ? '#3f961d !important' : 'initial')};
    background-color: ${({ editModeEnabled }) => (!editModeEnabled ? '#3f961d1a !important' : 'initial')};
  }
`;
