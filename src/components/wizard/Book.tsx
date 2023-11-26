

import React, { ReactNode } from 'react'
import Layout from './Layout.jsx'
import { Button } from '@mui/material'

export type BookProps = {
  title: string
  children: ReactNode[]
}


export function Book(props: BookProps) {
  return (
    <Layout
      title={props.title}
      stepper={<></>}
      page={<></>}
      back={<Button onClick={() => { }} disabled={false}>Back</Button>}
      next={<Button onClick={() => { }} disabled={false}>Next</Button>}
    />
  )
}

export default Book