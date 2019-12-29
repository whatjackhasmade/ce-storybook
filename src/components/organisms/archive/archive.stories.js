import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Archive from "./archive"

import knobData from "./archive.knobs.json"
const { productItems } = knobData

export const productArchive = () => (
  <Archive
    items={array(productItems.label, productItems.default, productItems.group)}
  />
)

productArchive.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32",
    },
  },
}

export default {
  component: Archive,
  decorators: [withDesign],
  title: "Organisms/Archive",
}
