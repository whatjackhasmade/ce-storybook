import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Footer from "./footer"

import knobData from "./footer.knobs.json"
const { footerNav } = knobData

export const standardFooter = () => (
  <Footer
    navigation={array(footerNav.label, footerNav.default, footerNav.group)}
  />
)

standardFooter.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=923%3A0",
    },
  },
}

export default {
  component: Footer,
  decorators: [withDesign],
  title: "Organisms/Footer",
}
