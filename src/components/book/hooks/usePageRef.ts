import { useRef } from "react"
import { IPageHandler } from "../interfaces"

export function usePageRef() {
  return useRef<IPageHandler>(null)
}

export default usePageRef

