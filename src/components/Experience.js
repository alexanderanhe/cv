import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));


export default function Experience({ data }) {
  const classes = useStyles();
  
  return (
    <section className="experience">
      <Typography component="div">
        <h3>Experience:</h3>
        <List className={classes.root}>
          {data.map((e, i) => {
            return (
              <div key={ i }>
                <ListItem>
                  <ListItemText primary={ <strong>{ e.title }</strong> } secondary={
                    <React.Fragment>
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          { e.job }
                        </Typography>
                        { e.type }
                      </div>
                      <div>{ e.period }</div>
                      <div>{ e.address }</div>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          { e.description }
                        </Typography>
                    </React.Fragment>
                    } />
                  </ListItem>
                  <Divider component="li" />
                </div>)
          })}

        </List>
      </Typography>
    </section>
  )
}
