import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Header from "./header"

import knobData from "./header.knobs.json"
const { headerNav } = knobData

export const standardHeader = () => (
  <Header
    navigation={array(headerNav.label, headerNav.default, headerNav.group)}
  />
)

export const fixedDarkHeader = () => (
  <Header
    navigation={array(headerNav.label, headerNav.default, headerNav.group)}
    variant="fixedDark"
  />
)

export const fixedLightHeader = () => (
  <Header
    navigation={array(headerNav.label, headerNav.default, headerNav.group)}
    variant="fixedLight"
  />
)

standardHeader.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=890%3A2201",
    },
  },
}

fixedDarkHeader.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=903%3A96",
    },
  },
}

fixedLightHeader.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=903%3A115",
    },
  },
}

export default {
  component: Header,
  decorators: [withDesign],
  title: "Organisms/Header",
}
