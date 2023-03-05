import { StoryFn } from "@storybook/react"

import { Input } from "./Input"

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "text" },
      description: "Input type",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Input default value",
    },
    onChange: {
      control: { type: "action" },
      description: "onChange event",
    },
    className: {
      control: { type: "text" },
      description: "Custom className",
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ display: "flex " }}>
        <Story />
      </div>
    ),
  ],
}

export const TextInput = {
  args: {
    type: "text",
    placeholder: "Text input",
  },
}
