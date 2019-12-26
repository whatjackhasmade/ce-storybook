import React from "react"
import { array } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Slider from "./slider"

import knobData from "./slider.knobs.json"
const { items } = knobData

export const heroSlider = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A215"
    }
  >
    <Slider
      items={array(items.label, items.default, items.group)}
      variant="hero"
    />
  </WithFigma>
)

export default {
  component: Slider,
  title: "Slider",
}
