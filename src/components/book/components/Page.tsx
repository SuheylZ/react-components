/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, Ref } from 'react'
import { IPageEvents } from '../utils/interfaces'

export type PageProps = {
  id: string
  title: string
  component: ReactElement
  enabled?: boolean
  handler?: Ref<IPageEvents>
}

export const Page = (_: PageProps) => <></>
export const PageType = (<Page id="" title="" component={<></>} />).type

export default Page