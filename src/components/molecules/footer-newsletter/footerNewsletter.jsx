import React, { useState } from "react"
import fetch from "unfetch"
import { Formik } from "formik"

import CTA from "../../atoms/cta/cta"

const expressDomain =
  process.env.EXPRESS_DOMAIN || "https://ce-express.herokuapp.com"

const FooterNewsletter = () => {
  const [isRegistered, setRegistered] = useState(false)

  const registerRequest = async ({ email }) => {
    try {
      const res = await fetch(`${expressDomain}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      })
      if (res.status === 200) setRegistered(true)
    } catch (exception) {
      console.error(exception)
    }

    return true
  }

  return (
    <Formik
      initialValues={{ email: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) errors.email = "Required"
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = "Invalid email address"
        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await registerRequest({ ...values })
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          aria-busy={isSubmitting}
          className={isRegistered ? `form--submitted` : `form`}
          disabled={isRegistered || isSubmitting}
          onSubmit={handleSubmit}
        >
          <input
            disabled={isRegistered}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email Address..."
            type="email"
            value={!isRegistered ? values.email : "😊 We'll be in touch"}
          />
          {!isRegistered && (
            <button type="submit" disabled={isSubmitting}>
              <CTA>Send</CTA>
            </button>
          )}
        </form>
      )}
    </Formik>
  )
}

export default FooterNewsletter
