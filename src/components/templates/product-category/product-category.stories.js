import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import ProductCategory from "./product-category"

import footerData from "../footerStories.json"
import headerData from "../headerStories.json"

import knobData from "./product-category.knobs.json"

export const productCategory = () => (
  <ProductCategory
    gatsbyContext={{
      footerMenus: footerData,
      headerMenu: headerData,
    }}
  />
)

productCategory.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=924%3A1",
    },
  },
}

export default {
  component: ProductCategory,
  decorators: [withDesign],
  title: "Templates/Product Category",
}
