import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Panels from "./panels"

import knobData from "./panels.knobs.json"
const { items } = knobData

export const standardPanels = () => (
  <Panels items={array(items.label, items.default, items.group)} />
)

standardPanels.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A532",
    },
  },
}

export default {
  component: Panels,
  decorators: [withDesign],
  title: "Panels",
}
