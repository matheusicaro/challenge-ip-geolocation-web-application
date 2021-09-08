import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

type StateProps = {
  open: boolean;
  onClickSend: (value: string) => void;
};

const DialogGetIP: React.FC<StateProps> = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickSave = () => {
    props.onClickSend(value);
  };

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I couldn't identify your IP. Please let me know your IP address below in the correct format (<span>10.255.255.255</span>).
            <span>If you want, you can use the term “my IP” in the Google search to confirm your result.</span>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="My IP is:"
            type="text"
            placeholder="exeample: 10.255.255.255"
            fullWidth
            value={value}
            onChange={(e) => handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickSave} color="primary">
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogGetIP;
