import React from "react"
import { text } from "@storybook/addon-knobs"
import { WithFigma } from "storybook-addon-figma"
import Accordion from "./accordion"

import knobData from "./accordion.knobs.json"
const { title } = knobData

export const standardAccordion = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32"
    }
  >
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
  </WithFigma>
)

export default {
  component: Accordion,
  title: "Accordion",
}
