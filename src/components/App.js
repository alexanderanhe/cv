import React, { useState } from 'react';
import './App.css';
import { data } from "../Data";
import { db } from '../firebase'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import ContactDialog from './ContactDialog'

// import TemporaryDrawer from '../examples/TemporaryDrawer'
// import CustomizedTimeline from '../examples/CustomizedTimeline'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  menu: {
    boxShadow: 'none',
    paddingTop: '1.3em',
    paddingBottom: '1.3em',
    background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 71%, rgba(255,255,255,0.3) 100%)",
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 )",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [opensnackbars, setOpensnackbars] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseSnackbars = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbars(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = async (contactData) => {
    handleClose()
    setLoading(true)
    let contactInfo = db.ref('contact').push()
    await contactInfo.set(contactData).then(() => {
      setLoading(false)
      setOpensnackbars(true)
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    });
  }

  return (
    <>
      <div className={classes.root}>
          <AppBar position="sticky" color="inherit" className={classes.menu}>
            <Container maxWidth="lg">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <div className="title-logo"><span className="logo-text">A</span></div>
                </Typography>
                <Button color="inherit" onClick={handleClickOpen}>Contact me</Button>
                <Button href={ data.principal.linkedin } target="_blank" color="inherit">
                  <LinkedInIcon/>
                </Button>
                <Button  color="inherit" href={ data.principal.github } target="_blank" rel="noreferrer">
                  <GitHubIcon/>
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="md">
            <Home/>
            <About data={ data.principal }/>
            <Experience data={ data.experiences }/>
            <Projects data={ data.projects }/>
            <Skills data={ data.skills }/>

            {/* <TemporaryDrawer/>
            <CustomizedTimeline/> */}

            <ContactDialog open={ open } handleClose={ handleClose } sendEmail={ sendEmail } />
            <Snackbar open={opensnackbars} autoHideDuration={6000} onClose={handleCloseSnackbars}>
              <Alert onClose={handleCloseSnackbars} severity="success">
                Your message has been sent!
              </Alert>
            </Snackbar>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </Container>
          
      </div>
    </>
  );
}

export default App;
