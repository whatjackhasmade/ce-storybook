import React from "react"
import { array } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Cart from "./cart"

import knobData from "./cart.knobs.json"
const { cartContents } = knobData

export const standardCart = () => (
  <Cart
    items={array(cartContents.label, cartContents.default, cartContents.group)}
  />
)

standardCart.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32",
    },
  },
}

export default {
  component: Cart,
  decorators: [withDesign],
  title: "Cart",
}
