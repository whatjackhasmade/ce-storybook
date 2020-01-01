import React, { useState } from "react"
import { node, string } from "prop-types"

import StyledAccordion from "./accordion.styles"

import IconArrowLeft from "../../../assets/images/icons/arrow-left.svg"

const Accordion = ({ children, title }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleAccordion = e => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StyledAccordion className="accordion" isOpen={isOpen}>
      <button
        className="accordion__toggle"
        onClick={toggleAccordion}
        title={`View ${title} contents`}
      >
        <h3 className="accordion__title">{title}</h3>
        <IconArrowLeft />
      </button>
      <div className="accordion__contents">{children}</div>
    </StyledAccordion>
  )
}

Accordion.propTypes = {
  children: node,
  title: string,
}

Accordion.defaultProps = {
  title: "Click to toggle",
}

export default Accordion
