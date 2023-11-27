import { Ref, useImperativeHandle } from "react"
import { IPageHandler } from "../interfaces"

export function usePageHandler(ref: Ref<IPageHandler>, impl: IPageHandler) {
  useImperativeHandle(ref, () => impl)
}
