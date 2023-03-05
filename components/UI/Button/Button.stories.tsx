import { Button } from "./Button"

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "text" },
      description: "Button size",
    },
    variant: {
      control: { type: "text" },
      description: "Button variant",
    },
    onClick: {
      control: { type: "action" },
      description: "Click event",
    },
    className: {
      control: { type: "text" },
      description: "Custom className",
    },
  },
}

export const SizeSmall = {
  args: {
    children: "Button",
    size: "sm",
  },
}

export const SizeMedium = {
  args: {
    children: "Button",
  },
}

export const SizeLarge = {
  args: {
    children: "Button",
    size: "lg",
  },
}

export const AnchorLink = {
  args: {
    children: "Anchor",
    href: "/",
  },
}

export const Outline = {
  args: {
    children: "Button",
    variant: "outline",
  },
}

export const Gradient = {
  args: {
    children: "Button",
    variant: "gradient",
  },
}

export const GradientShadow = {
  args: {
    children: "Button",
    variant: "gradientShadow",
  },
}
