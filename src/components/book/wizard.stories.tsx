
import { Meta, StoryObj } from "@storybook/react"
import { Book, Page, usePageRef } from "./index"
import Person from "../persons"

const meta: Meta<typeof Book> = {
  title: "Components/Book",
  component: Book
}
export default meta
type Story = StoryObj<typeof Book>


function MyBook() {
  const ref = usePageRef()

  return (
    <Book title="My Book">
      <Page id="1" title="Page 1" component={<Person ref={ref} />} handler={ref} />
      <Page id="2" title="Page 2" component={<>Second Page</>} />
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