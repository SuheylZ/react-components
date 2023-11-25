

import React, { ReactNode } from 'react'
import Layout from './layout.jsx'
import { Button } from '@mui/material'

export type WizardProps = {
  title: string
  children: ReactNode[]
}


function Wizard(props: WizardProps) {
  return (
    <Layout
      title={props.title}
      stepper={ <></>}
      page={ <></>}
      back={<Button onClick={() => { } } disabled={false }>Back</Button>}
      next={<Button onClick={() => { } } disabled={false}>Next</Button>}
    />
  )
}

export default Wizard