import React from "react"
import { array } from "@storybook/addon-knobs"
import Navigation from "./navigation"

import knobData from "./navigation.knobs.json"
const { navItems } = knobData

export const basicNavigation = () => (
  <Navigation items={array(navItems.label, navItems.default, navItems.group)} />
)

export default {
  component: Navigation,
  title: "Navigation",
}
