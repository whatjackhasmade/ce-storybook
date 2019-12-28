import React from "react"
import { text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Accordion from "./accordion"

import knobData from "./accordion.knobs.json"
const { title } = knobData

export const standardAccordion = () => (
  <Accordion title={text(title.label, title.default, title.group)}>
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <label htmlFor="form-field">Input Label</label>
      <input id="form-field" name="form-field" type="text"></input>
    </form>
  </Accordion>
)

standardAccordion.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32",
    },
  },
}

export default {
  component: Accordion,
  decorators: [withDesign],
  title: "Accordion",
}
