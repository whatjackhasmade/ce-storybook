import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Carousel from "./carousel"

import knobData from "./carousel.knobs.json"
const { items, intro } = knobData

export const productCarousel = () => (
  <WithFigma url="https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A992">
    <Carousel
      intro={{
        cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
        subtitle: text(
          intro.subtitle.label,
          intro.subtitle.default,
          intro.subtitle.group
        ),
        text: text(intro.text.label, intro.text.default, intro.text.group),
        title: text(intro.title.label, intro.title.default, intro.title.group),
      }}
      items={array(items.label, items.default, items.group)}
    />
  </WithFigma>
)

export default {
  component: Carousel,
  title: "Caoursel",
}
