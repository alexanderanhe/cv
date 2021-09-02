import React from 'react'
import { Typography } from '@material-ui/core'
import gameImage from '../../pngegg.png';

export default function About({ data }) {
  return (
    <section className="about">
      <Typography component="div">
        <h3>About:</h3>
        <p>I am a web application software developer with eight years’ experience developing a wide range of tools for a several customers.
          I have proven expertise in marketing and promotion apps in depth and very capable at all aspects related project development,
          planning for requirements gathering through writing and testing code, creating documentation and support.
          See my previous work history on <a href={ data.linkedin } target="_blank" rel="noreferrer">LinkedIn</a>.</p>
      </Typography>
      <div className="game-image" style={{backgroundImage: `url(${gameImage})`}}>

      </div>
    </section>
  )
}
