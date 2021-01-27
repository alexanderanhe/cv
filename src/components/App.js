import React, { useState } from 'react';
import './App.css';
import { data } from "../Data";
import { db } from '../firebase'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Navbar from './common/Navbar'
import Home from './home/Home'
import Experience from './Experience'
import Projects from './projects/Projects'
import ProjectDetail from './projects/Detail'
import Skills from './Skills'
import Contact from './common/Contact'
import Footer from './common/Footer'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
        <Router>
          <Navbar data={ data.principal } handleClickOpen={ handleClickOpen }/>
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/">
                <Home data={ data.principal }/>
              </Route>
              <Route path="/experience">
                <Experience data={ data.experiences }/>
              </Route>
              <Route path="/projects" exact>
                <Projects data={ data.projects }/>
              </Route>
              <Route path="/project/:id">
                <ProjectDetail data={ data.projects }/>
              </Route>
              <Route path="/skills">
                <Skills data={ data.skills }/>
              </Route>
            </Switch>

            <Contact open={ open } handleClose={ handleClose } sendEmail={ sendEmail } />
            <Snackbar open={opensnackbars} autoHideDuration={6000} onClose={handleCloseSnackbars}>
              <Alert onClose={handleCloseSnackbars} severity="success">
                Your message has been sent!
              </Alert>
            </Snackbar>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </Container>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
