import React from "react"
import { text } from "@storybook/addon-knobs"
import ErrorMessage from "./errorMessage"

import knobData from "./errorMessage.knobs.json"
const { message } = knobData

export const basicError = () => (
  <ErrorMessage message={text(message.label, message.default, message.group)} />
)

export default {
  component: ErrorMessage,
  title: "Error",
}
