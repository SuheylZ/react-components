import React from 'react'
import { Box, Typography } from '@mui/material'


export type PersonProps = {
  title: string
  description?: string
}


export function Person(props: PersonProps) {
  return (
    <Box>
      <Typography variant='h3'> {props.title ?? "No Name"}</Typography>
      <Typography variant='body1'>{props.description ?? " No Description"}</Typography>
    </Box>
  )
}

export default Person
