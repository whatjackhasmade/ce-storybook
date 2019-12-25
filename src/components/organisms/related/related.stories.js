import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Related from "./related"

import knobData from "./related.knobs.json"
const { cta, items, intro, subtitle, title } = knobData

export const postsRelated = () => (
  <WithFigma url="https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=969%3A521">
    <Related
      cta={object(cta.label, cta.default, cta.group)}
      items={array(items.label, items.default, items.group)}
      intro={text(intro.label, intro.default, intro.group)}
      subtitle={text(subtitle.label, subtitle.default, subtitle.group)}
      title={text(title.label, title.default, title.group)}
    />
  </WithFigma>
)

export default {
  component: Related,
  title: "Related",
}
