import React from "react"
import { color, text } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Button from "./button"

import knobData from "./button.knobs.json"
const { btnBackground, btnText } = knobData

import ThemeDefault from "../../particles/themeDefault"

const alertText = e => {
  e.preventDefault()
  alert("You clicked the button")
}

export const basicButton = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=954%3A426"
    }
  >
    <Button
      background={color(
        btnBackground.label,
        ThemeDefault.primary,
        btnBackground.group
      )}
    >
      {text(btnText.label, btnText.default, btnText.group)}
    </Button>
  </WithFigma>
)
export const secondaryButton = () => (
  <Button variant="secondary">Secondary button</Button>
)
export const tertiaryButton = () => (
  <Button variant="tertiary">Tertiary button</Button>
)
export const removeIconButton = () => (
  <Button icon="times" variant="primary">
    Remove button
  </Button>
)
export const functionButton = () => (
  <Button onClick={alertText}>Click me</Button>
)
export const linkedButton = () => <Button href="/route">Link to route</Button>

export default {
  component: Button,
  title: "Button",
}
