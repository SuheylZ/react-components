import { ReactNode, Ref } from "react"

export interface IPageHandler {
  validate: () => Promise<boolean>
  save?: () => object | string | unknown
  load?: (arg: object | string | unknown) => void
}

export interface IPage {
  title: string
  component: ReactNode
  enabled?: boolean
  handler?: Ref<IPageHandler>
  state: unknown | undefined
}



