import React, { ReactElement, RefObject, useEffect, useMemo } from 'react'
import Layout from './Layout.jsx'
import { Button } from '@mui/material'
import useBookLogic from '../hooks/useBookLogic.js'
import Steps from './Steps.jsx'
import { IPage, IPageEvents } from '../interfaces.js'



export type BookProps = {
  title?: string
  children?: ReactElement[] | ReactElement
}



export function Book(props: BookProps) {
  const [index, max, pages, back, moveNext] = useBookLogic(props)
  const titles = useMemo(() => Array.from(pages.values()).map(x => x.title), [pages])
  const page = pages.get(index)?.component ?? <></>

  const next = () => {
    const p = pages.get(index) as IPage
    const h = p.handler as RefObject<IPageEvents>
    if (h && h.current?.onValidate) {
      h.current.onValidate().then(ret => {
        if (ret) {
          p.state = h.current?.onSave() ?? null
          moveNext()
        }
      })
    }
    else moveNext()
  }

  useEffect(() => {
    const p = pages.get(index) as IPage
    if (p) {
      const h = p.handler as RefObject<IPageEvents>
      if (h?.current && !!p.state)  // Only when onLoad is implemented AND if !!state
        h.current.onLoad(p.state)
    }
  }, [index])

  return (
    <Layout
      title={props.title ?? ""}
      caption={titles[index]}
      stepper={<Steps titles={titles} current={index} />}
      page={page}
      back={<Button variant="contained" onClick={back} disabled={index === 0}> Back </Button>}
      next={<Button variant="contained" onClick={next} disabled={index >= max}> Next </Button>}
    />
  )
}

export default Book