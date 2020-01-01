import React from "react"
import { boolean, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import SliceGrid from "./slice-grid"

import knobData from "./slice-grid.knobs.json"

const { image, reverse, text } = knobData

export const standardSliceGrid = () => (
  <SliceGrid
    image={object(image.label, image.default, image.group)}
    reverse={boolean(standard.label, standard.default, standard.group)}
    text={text(title.label, title.default, title.group)}
  />
)
export const reverseSliceGrid = () => (
  <SliceGrid
    image={object(image.label, image.default, image.group)}
    reverse={boolean(reverse.label, reverse.default, reverse.group)}
    text={text(title.label, title.default, title.group)}
  />
)

standardSliceGrid.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=2321%3A29",
    },
  },
}

reverseSliceGrid.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=2321%3A29",
    },
  },
}

export default {
  component: SliceGrid,
  decorators: [withDesign],
  title: "Organisms/Slice Grid",
}
