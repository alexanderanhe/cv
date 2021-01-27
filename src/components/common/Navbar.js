import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as ReactLogo } from '../../logo.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Navbarmobile from './Navbarmobile'

const useStyles = makeStyles((theme) => ({
  menu: {
    boxShadow: 'none',
    paddingTop: '1.3em',
    paddingBottom: '1.3em',
    background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 71%, rgba(255,255,255,0.3) 100%)",
    filter: "progid:hXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 )",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ data, handleClickOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit" className={classes.menu}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="title-logo" to="">
              <ReactLogo className="logo-text" style={{ width: '100%', height: '100%' }}/>
            </Link>
          </Typography>
          <Box display={{ xs: 'none', md: 'block' }}>
            <Link to="/" style={{ color: 'inherit'}}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/experience" style={{ color: 'inherit'}}>
              <Button color="inherit">Experience</Button>
            </Link>
            <Link to="/projects" style={{ color: 'inherit'}}>
              <Button color="inherit">Projects</Button>
            </Link>
            <Link to="/skills" style={{ color: 'inherit'}}>
              <Button color="inherit">Skills</Button>
            </Link>
            <Button color="inherit" onClick={handleClickOpen}>Contact</Button>
            <Button href={ data.linkedin } target="_blank" color="inherit">
              <LinkedInIcon/>
            </Button>
            <Button  color="inherit" href={ data.github } target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </Button>
          </Box>
          <Box display={{ xs: 'block', md: 'none' }}>
            <Navbarmobile data={ data } handleClickOpen={ handleClickOpen }/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
