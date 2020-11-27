import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    
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
  return (
    <>
      <div className={classes.root}>
          <AppBar position="sticky" color="inherit" className={classes.menu}>
            <Container maxWidth="lg">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <div className="title-logo"><span className="logo-text">A</span></div>
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Projects</Button>
              </Toolbar>
            </Container>
          </AppBar>
        <Container maxWidth="md">
          <Typography component="div">
            <h1>Hello, my name is Alex.<br/>I am a Full Stack Developer living in Mexico City, MX.</h1>
            <h3>About:</h3>
            <p>I am a web application software developer with eight years’ experience developing a wide range of tools for a range of clients. I have proven expertise in marketing and promotion apps in depth and very capable at all aspects related project development, planning for requirements gathering through writing and testing code, creating documentation and support. See my previous work history on <a href="//www.linkedin.com/in/alexander-anguloh/">LinkedIn</a>.</p>
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default App;
