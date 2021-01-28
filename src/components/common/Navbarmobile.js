import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function Navbarmobile({ data, handleClickOpen }) {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/" style={{ color: 'inherit'}}>
          <ListItem button key="home">
            <ListItemText primary="About" />
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/experience" style={{ color: 'inherit'}}>
          <ListItem button key="experience">
            <ListItemText primary="Experience" />
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/projects" style={{ color: 'inherit'}}>
          <ListItem button key="projects">
            <ListItemText primary="Projects" />
            <ListItemIcon>
              <DeveloperModeIcon/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/skills" style={{ color: 'inherit'}}>
          <ListItem button key="skills">
            <ListItemText primary="Skills" />
            <ListItemIcon>
              <AssignmentIcon/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <ListItem button key="contact" onClick={handleClickOpen}>
          <ListItemText primary="Contact" />
          <ListItemIcon>
            <ContactPhoneIcon/>
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href={ data.linkedin } target="_blank" key="linkedin">
          <ListItemIcon>
            <LinkedInIcon/>
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        <ListItem button component="a" href={ data.github } target="_blank" key="Github">
          <ListItemIcon>
            <GitHubIcon/>
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="navbar">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon/>
        </Button>
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
