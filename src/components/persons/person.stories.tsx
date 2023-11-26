import { Meta, StoryObj } from "@storybook/react"
import Person from "."

const meta: Meta<typeof Person> = {
  title: "Components/Person",
  component: Person
}
export default meta


type Story = StoryObj<typeof Person>

export const story: Story = {
  name: "Basic",
  render: () => <Person title="Samuel" description="No description" />
}

