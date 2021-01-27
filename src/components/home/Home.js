import React from 'react'
import { Typography } from '@material-ui/core'
import About from './About'

export default function Home({ data }) {
  return (
    <>
      <section className="home">
        <Typography component="div">
          <h1>Hello, my name is Alex.<br/>I am a Full Stack Developer living in Mexico City, MX.</h1>
        </Typography>
      </section>
      <About data={ data }/>
    </>
  )
}
