import { Ref, useImperativeHandle } from "react"
import { IPageEvents } from "../utils/interfaces"

export function usePageEvents(ref: Ref<IPageEvents>, impl: IPageEvents) {
  useImperativeHandle(ref, () => impl)
}



