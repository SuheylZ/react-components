
import { Meta, StoryObj } from "@storybook/react"
import { Book, Page, usePageRef } from "../index"
import Person from "./persons"
import Company from "./company"

const meta: Meta<typeof Book> = {
  title: "Components/Book",
  component: Book
}
export default meta
type Story = StoryObj<typeof Book>


function MyBook() {
  const ref = usePageRef()
  const ref2 = usePageRef()

  const onDone = async (v: Map<string, unknown>) => {
    console.log("onDone() called")
    for (const it of v.values())
      console.log(JSON.stringify(it as string))
    await new Promise<void>(r => r())
  }

  return (
    <Book title="My Book" onDone={onDone} >
      <Page id="1" title="Page 1" component={<Person ref={ref} />} handler={ref} />
      <Page id="2" title="Page 2" component={<Company ref={ref2} />} handler={ref2} />
      <Page id="3" title="Page 3" component={<>Third Page</>} />
    </Book>
  )
}


/**
 * ========
 * STORIES  
*/

export const story0: Story = {
  name: "No Pages",
  render: () => (
    <Book title="My Book">
    </Book>)
}

export const story1: Story = {
  name: "Single Page",
  render: () => (
    <Book title="My Book">
      <Page id="1" title="Page 1" component={<>First Page</>} />
    </Book>)
}

export const story2: Story = {
  name: "Multiple Page",
  render: () => (<MyBook />)
}