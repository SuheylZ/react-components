/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, Ref } from 'react'
import { IPageEvents } from '../interfaces'

export type PageProps = {
  id: string
  title: string
  component: ReactElement
  enabled?: boolean
  handler?: Ref<IPageEvents>
}

export function Page(_: PageProps) {
  return (<></>)
}

export const PageType = (<Page id="" title="" component={<></>} />).type
export default Page