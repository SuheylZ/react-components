import { ReactElement, useCallback, useMemo, useState } from "react"
import { BookProps } from "../components/Book"
import { PageProps } from "../components/Page"
import { IPage } from "../interfaces"
import Page from "../components/Page"

/**
 *
 * @param data : BookProps
 * @returns [index: number, max: number, pages: Map<number, IPage>, back: ()=>void, next: ()=>void]
 */
export function useBookLogic(
  data: BookProps
): [number, number, Map<number, IPage>, () => void, () => void] {
  const pages = useMemo(() => {
    const map = new Map<number, IPage>()
    const set = new Set<string>()

    const children = data.children
      ? Array.isArray(data.children)
        ? data.children
        : [data.children]
      : Array<ReactElement>()

    for (const it of children) {
      if (it.type === Page) {
        const props = it.props as PageProps
        const { id, title, component, handler } = props
        if (!set.has(id)) {
          const idx = map.size
          map.set(idx, {
            id: id,
            title: title,
            component: component,
            enabled: true,
            handler: handler,
            state: undefined
          } as IPage)
        } else throw new Error(`duplicate pages cannot be added ${id}`)
      }
    } // End of For loops
    return map
  }, [data.children])

  const min = 0
  const max = pages.size > 0 ? pages.size : 0

  const [pageIndex, setPageIndex] = useState(min)
  const setNextPage = useCallback(
    () =>
      setPageIndex((p) => {
        const allowed = max - 1
        const value = p + 1
        const index = value < allowed ? value : allowed
        return index
      }),
    [max]
  )

  const setBackPage = useCallback(
    () =>
      setPageIndex((p) => {
        const value = p - 1
        const index = value < min ? min : value
        return index
      }),
    [min]
  )

  return [pageIndex, max - 1, pages, setBackPage, setNextPage]
}

export default useBookLogic




