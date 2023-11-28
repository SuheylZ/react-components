import React, { ReactElement } from 'react'
import { Button } from '@mui/material'
import Layout from './Layout'
import useBookLogic from '../hooks/useBookLogic'
import Steps from './Steps'

export type BookProps = {
  title?: string
  children?: ReactElement[] | ReactElement
  onDone?: (arg: Map<string, unknown>) => Promise<void>
}


export function Book(props: BookProps) {
  const logic = useBookLogic(props)

  return (
    <Layout
      title={props.title ?? ""}
      caption={logic.captions[logic.index]}
      stepper={<Steps titles={logic.captions} current={logic.index} />}
      page={logic.page ?? <></>}
      back={<Button variant="contained" onClick={logic.handleBack} disabled={!logic.isFirstPage()}> Back </Button>}
      next={<Button variant="contained" onClick={async () => {
        if (logic.isLastPage())
          await logic.handleDone()
        else
          logic.handleNext()
      }} disabled={(logic.isLastPage() && !(props.onDone))}> {logic.isLastPage() && props.onDone ? "Finish" : "Next"} </Button>}
    />
  )
}

export default Book