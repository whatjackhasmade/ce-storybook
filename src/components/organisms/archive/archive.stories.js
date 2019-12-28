import React from "react"
import { array } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Archive from "./archive"

import knobData from "./archive.knobs.json"
const { productItems } = knobData

export const productArchive = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32"
    }
  >
    <Archive
      items={array(
        productItems.label,
        productItems.default,
        productItems.group
      )}
    />
  </WithFigma>
)

export default {
  component: Archive,
  title: "Archive",
}
