import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Product from "./product"

import footerData from "../footerStories.json"
import headerData from "../headerStories.json"

import knobData from "./product.knobs.json"
const {
  banner,
  carousel,
  description,
  mediaItemUrl,
  name,
  productId,
} = knobData

export const productExample = () => (
  <Product
    gatsbyContext={{
      footerMenus: footerData,
      headerMenu: headerData,
    }}
    pageContext={{
      banner: {
        content: text(
          banner.content.label,
          banner.content.default,
          banner.content.group
        ),
        cta: object(banner.cta.label, banner.cta.default, banner.cta.group),
        title: text(
          banner.title.label,
          banner.title.default,
          banner.title.group
        ),
      },
      carousel: {
        intro: {
          cta: object(
            carousel.intro.cta.label,
            carousel.intro.cta.default,
            carousel.intro.cta.group
          ),
          subtitle: text(
            carousel.intro.subtitle.label,
            carousel.intro.subtitle.default,
            carousel.intro.subtitle.group
          ),
          text: text(
            carousel.intro.text.label,
            carousel.intro.text.default,
            carousel.intro.text.group
          ),
          title: text(
            carousel.intro.title.label,
            carousel.intro.title.default,
            carousel.intro.title.group
          ),
        },
        items: array(
          carousel.items.label,
          carousel.items.default,
          carousel.items.group
        ),
      },
      description: text(
        description.label,
        description.default,
        description.group
      ),
      image: {
        mediaItemUrl: text(
          mediaItemUrl.label,
          mediaItemUrl.default,
          mediaItemUrl.group
        ),
      },
      name: text(name.label, name.default, name.group),
      productId: text(productId.label, productId.default, productId.group),
    }}
  />
)

productExample.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=924%3A1",
    },
  },
}

export default {
  component: Product,
  decorators: [withDesign],
  title: "Templates/Product",
}
