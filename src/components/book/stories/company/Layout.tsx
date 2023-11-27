import React, { ReactElement } from 'react'
import { Box, Grid } from '@mui/material'



export type LayoutProps = {
  name: ReactElement,
  address: ReactElement
  error: {
    name?: string
    address?: string
  }
}

export function Layout(props: LayoutProps) {
  const { name, address } = props
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
          {address}
        </Grid>
        <Grid item xs={12}>
          {props.error.address}
        </Grid>
      </Grid>
    </Box>
  )
}
