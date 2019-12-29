import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Slider from "./slider"

import knobData from "./slider.knobs.json"
const { items } = knobData

export const heroSlider = () => (
  <Slider
    items={array(items.label, items.default, items.group)}
    variant="hero"
  />
)

heroSlider.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A215",
    },
  },
}

export default {
  component: Slider,
  decorators: [withDesign],
  title: "Organisms/Slider",
}
