import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Skills({ data }) {
  const classes = useStyles();

  return (
    <section className="skills">
      <Typography component="div">
        <h3>Skills:</h3>
        
        <div className={classes.root}>
        {data.map((e, i) => {
          return (
            <Accordion key={ i }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{ e.title }</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ e.desc }</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
        </div>
      </Typography>
    </section>
  )
}
