import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

export default function ContactDialog({ open, handleClose, sendEmail }) {
  const classes = useStyles();

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    sendEmail({
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    })
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

            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <BootstrapInput id="name" ref={nameRef} required />
              <FormHelperText id="filled-weight-helper-text">Name</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <BootstrapInput id="email" type="email" ref={emailRef} required />
              <FormHelperText id="filled-weight-helper-text">Email</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="message">Message</InputLabel>
              <BootstrapInput id="message" multiLine={true} rows={2} ref={messageRef} required />
              <FormHelperText id="filled-weight-helper-text">Message</FormHelperText>
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
