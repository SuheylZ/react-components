import { ReactNode } from "react"

export interface IPageHandler {
  validate: () => Promise<boolean>
  save?: () => object | string | unknown
  load?: (arg: object | string | unknown) => void
}

export interface IPage {
  title: string
  component: ReactNode
  enabled?: boolean
  handler?: IPageHandler
}

