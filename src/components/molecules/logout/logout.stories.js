import React from "react"
import { text } from "@storybook/addon-knobs"
import Logout from "./logout"

import knobData from "./logout.knobs.json"
const { title } = knobData

export const basicNavigation = () => (
  <Logout title={text(title.label, title.default, title.group)} />
)

export default {
  component: Logout,
  title: "Logout",
}
