



import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

export type LayoutProps = {
  title: string
  stepper: ReactNode
  page: ReactNode
  back: ReactNode
  next: ReactNode
}


export function Layout(props: LayoutProps) {
  const { title, page, stepper, back, next } = props
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

      <Grid item xs={12} justifyContent="flex-start">
        <Typography variant='h5' >{title}</Typography> 
      </Grid>

      <Grid item xs={12}>
        {stepper}
      </Grid>

      <Grid item xs={12} style={{ minHeight: '50vh' }}>
        <Box justifyContent="center" alignItems="center" display='flex' style={{ width: '100%', height: '100%' }}>
          <Paper elevation={0} sx={{ p: 10 }} >
            {page}
          </Paper>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1} direction="column" justifyContent="flex-start" >
          <Grid item xs={2} sm={8} md={9}>
            &nbsp;
          </Grid>
          <Grid item xs={10} sm={4} md={3} justifyContent="right" alignItems="end">
            {back}
            &nbsp;
            {next}
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Layout