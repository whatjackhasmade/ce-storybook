import React from "react"
import { WithFigma } from "storybook-addon-figma"
import ArchiveItem from "./archiveItem"

export const productArchive = () => (
  <WithFigma
    url={
      "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32"
    }
  >
    <ArchiveItem />
  </WithFigma>
)

export default {
  component: ArchiveItem,
  title: "Archive Item",
}
