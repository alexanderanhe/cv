import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  card: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#3ec4d9',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects({ data }) {
  const classes = useStyles();

  return (
    <section className="projects">
      <Typography component="div">
        <h3>Work & Play:</h3>
        
        <div classes={classes.card}>
          <Grid container spacing={3}>
            {data.map((e, i) => {
              return (
                <Grid item xs={12} sm={4} key={ i }>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          { e.type }
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={ e.title }
                      subheader={ e.subtitle }
                    />
                    <CardMedia
                      className={classes.media}
                      image={ e.thumb[0].uri }
                      title={ e.thumb[0].title }
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        { e.desc }
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="Github" href={ e.git } target="_blank" rel="noreferrer">
                        <GitHubIcon />
                      </IconButton>
                      <IconButton aria-label="Go" href={ e.uri } target="_blank" rel="noreferrer">
                        <LinkIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
              </Grid>
              )
            })}
          </Grid>
        </div>
      </Typography>
    </section>
  )
}
