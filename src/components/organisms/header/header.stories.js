import React from "react"
import { array } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Header from "./header"

import knobData from "./header.knobs.json"
const { headerNav } = knobData

export const standardHeader = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=890%3A2201"
    }
  >
    <Header
      navigation={array(headerNav.label, headerNav.default, headerNav.group)}
    />
  </WithFigma>
)

export const fixedDarkHeader = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=903%3A96"
    }
  >
    <Header
      navigation={array(headerNav.label, headerNav.default, headerNav.group)}
      variant="fixedDark"
    />
  </WithFigma>
)

export const fixedLightHeader = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=903%3A115"
    }
  >
    <Header
      navigation={array(headerNav.label, headerNav.default, headerNav.group)}
      variant="fixedLight"
    />
  </WithFigma>
)

export default {
  component: Header,
  title: "Header",
}
