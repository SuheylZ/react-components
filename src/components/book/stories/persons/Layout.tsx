import React, { ReactElement } from 'react'
import { Box, Grid } from '@mui/material'



export type LayoutProps = {
  name: ReactElement,
  description: ReactElement
  error: {
    name?: string
    description?: string
  }
}

export function Layout(props: LayoutProps) {
  const { name, description } = props
  return (
    <Box width="100">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {name}
        </Grid>
        <Grid item xs={12}>
          {props.error.name}
        </Grid>
        <Grid item xs={12}>
          {description}
        </Grid>
        <Grid item xs={12}>
          {props.error.description}
        </Grid>
      </Grid>
    </Box>
  )
}
