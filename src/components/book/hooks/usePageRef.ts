import { useRef } from "react"
import { IPageEvents } from "../utils/interfaces"

export function usePageRef() {
  return useRef<IPageEvents>(null)
}

export default usePageRef



