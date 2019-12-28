import React, { useState } from "react"
import PropTypes from "prop-types"

import StyledAccordion from "./accordion.styles"

const { node, string } = PropTypes

const Accordion = ({ children, title }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleAccordion = e => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StyledAccordion className="accordion" isOpen={isOpen}>
      <button onClick={toggleAccordion}>
        <h3 className="accordion__title">{title}</h3>
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
