import React from "react"
import { boolean, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Row from "./row"

import knobData from "./row.knobs.json"

const { cta, description, image, reverse, standard, subtitle, title } = knobData

export const standardRow = () => (
  <Row
    cta={object(cta.label, cta.default, cta.group)}
    description={text(
      description.label,
      description.default,
      description.group
    )}
    image={object(image.label, image.default, image.group)}
    reverse={boolean(standard.label, standard.default, standard.group)}
    subtitle={text(subtitle.label, subtitle.default, subtitle.group)}
    title={text(title.label, title.default, title.group)}
  />
)
export const reverseRow = () => (
  <Row
    cta={object(cta.label, cta.default, cta.group)}
    description={text(
      description.label,
      description.default,
      description.group
    )}
    image={object(image.label, image.default, image.group)}
    reverse={boolean(reverse.label, reverse.default, reverse.group)}
    subtitle={text(subtitle.label, subtitle.default, subtitle.group)}
    title={text(title.label, title.default, title.group)}
  />
)

standardRow.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=2321%3A29",
    },
  },
}

export default {
  component: Row,
  decorators: [withDesign],
  title: "Organisms/Row",
}
