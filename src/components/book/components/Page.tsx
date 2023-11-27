/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, Ref } from 'react'
import { IPageHandler } from '../interfaces'

export type PageProps = {
  id: string
  title: string
  component: ReactElement
  enabled?: boolean
  handler?: Ref<IPageHandler>
}

export function Page(_: PageProps) {
  return (<></>)
}

export const PageType = (<Page id="" title="" component={<></>} />).type
export default Page