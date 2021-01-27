import React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardmedia: {
    marginTop: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
}));

export default function ProjectDetail({ data }) {
  const classes = useStyles();
  let { id } = useParams();

  const project = data.find(project => project.slug === id)

  return (
    <>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          { project.title }
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>{ project.subtitle }</Typography>

        <Typography variant="body1">{ project.more }</Typography>
          { project.thumb.map((img, index) => {
            return (
              <Card className={classes.cardmedia} key={index}>
                <CardMedia
                className={classes.media}
                image={img.uri}
                title={ img.title}
              />
              </Card>)
          })}
      </Container>
    </>
  );
}
