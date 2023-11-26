import { Meta, StoryObj } from "@storybook/react"
import Person from "."

export const meta: Meta<typeof Person> = {
  title: "Components/Person",
  component: Person
}


type Story = StoryObj<typeof Person>

export const story: Story = {
  render: () => <Person title="Samuel" description="No description" />
}

export default meta