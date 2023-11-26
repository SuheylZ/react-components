



import { Box, Grid, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

export type LayoutProps = {
  title: string
  stepper: ReactNode
  page: ReactNode
  back: ReactNode
  next: ReactNode
} 


export function Layout(props: LayoutProps) {
  const {title, page, stepper, back, next } = props
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography variant='h2' >{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {stepper}
      </Grid>
      <Grid item xs={12}>
        <Box> {page} </Box>
      </Grid>
      <Grid item xs={6}>{back}</Grid>
      <Grid item xs={6}>{next}</Grid>
    </Grid>
  )
}

export default Layout