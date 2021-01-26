import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ContactDialog({ open, handleClose, sendEmail }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault()

    sendEmail(values)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact Me</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Thanks for taking the time to reach out. How can I help you today?
            </DialogContentText>

            <FormControl fullWidth className={classes.margin} variant="outlined">
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                id="name"
                value={values.amount}
                onChange={handleChange('name')}
                labelWidth={60}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                value={values.amount}
                onChange={handleChange('email')}
                labelWidth={60}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <InputLabel htmlFor="message">Message</InputLabel>
              <OutlinedInput
                id="message"
                value={values.amount}
                onChange={handleChange('message')}
                labelWidth={60}
              />
            </FormControl>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
