import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Homepage from "./homepage"

import knobData from "./homepage.knobs.json"
const { banner, carousel } = knobData

export const homepageExample = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=16%3A858"
    }
  >
    <Homepage
      banner={{
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
      }}
      carousel={{
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
      }}
    />
  </WithFigma>
)

export default {
  component: Homepage,
  title: "Homepage",
}
