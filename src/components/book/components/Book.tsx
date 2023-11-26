

import React, { ReactElement, useMemo } from 'react'
import Layout from './Layout.jsx'
import { Button } from '@mui/material'
import useBookLogic from '../hooks/useBookLogic.js'
import Steps from './Steps.jsx'

export type BookProps = {
  title?: string
  children?: ReactElement[] | ReactElement
}


export function Book(props: BookProps) {
  const [index, max, pages, back, next] = useBookLogic(props)
  const titles = useMemo(() => Array.from(pages.values()).map(x => x.title), [pages])
  const page = pages.get(index)?.component ?? <></>

  return (
    <Layout
      title={props.title ?? ""}
      stepper={<Steps titles={titles} current={index} />}
      page={page}
      back={<Button onClick={back} disabled={index === 0}>Back</Button>}
      next={<Button onClick={next} disabled={index >= max}>Next</Button>}
    />
  )
}

export default Book