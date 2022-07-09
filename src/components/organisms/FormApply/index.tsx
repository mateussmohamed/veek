import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

import { Button, Typography } from '../../atoms'
import { Field } from '../../molecules'

import {
  isRequired,
  isEmail,
  isTelephone,
  isDocument,
  maxLength,
} from './rules'

type Field = {
  value: string
  error: string
  rules: Array<Function>
}

export const FormApply = () => {
  const [fields, setFields] = React.useState<Record<string, Field>>({
    firstName: {
      value: '',
      error: '',
      rules: [isRequired, maxLength(50)],
    },
    name: {
      value: '',
      error: '',
      rules: [isRequired, maxLength(255)],
    },
    email: {
      value: '',
      error: '',
      rules: [isRequired, isEmail],
    },
    telephone: {
      value: '',
      error: '',
      rules: [isRequired, isTelephone],
    },
    cv: {
      value: '',
      error: '',
      rules: [isRequired, isDocument],
    },
    comments: {
      value: '',
      error: '',
      rules: [isRequired, maxLength(255)],
    },
  })

  const handleChangeInput = e => validField(e.target.name, e.target.value)

  const getFieldError = (rules, value) =>
    rules
      .reduce((acc, rule) => acc.concat(rule(value)), [])
      .find(error => !!error) || ''

  const setFieldErrors = () => {
    const invalidFields = Object.entries(fields).reduce(
      (acc, [key, field]) => ({
        ...acc,
        [key]: {
          ...field,
          error: getFieldError(field.rules, field.value),
        },
      }),
      {},
    )

    setFields(prev => ({ ...prev, ...invalidFields }))
  }

  const validField = async (name, value) => {
    const field = fields[name]
    const error = getFieldError(field.rules, value)

    await setFields({ ...fields, [name]: { ...field, value, error: error } })
  }

  const isValid = () => {
    const fieldsValues = Object.entries(fields)
    const fieldWithErrors = fieldsValues.filter(
      ([, field]) => !field.value || !!field.error,
    )

    return fieldWithErrors.length === 0
  }

  const resetForm = () => {
    const cleanedFields = Object.entries(fields).reduce(
      (acc, [key, field]) => ({
        ...acc,
        [key]: { ...field, error: '', value: '' },
      }),
      {},
    )
    setFields({ ...cleanedFields })
  }

  const submitForm = e => {
    e.preventDefault()

    const formData = Object.entries(fields).reduce((acc, [key, field]) => {
      acc[key] = field.value
      return acc
    }, {})

    if (isValid()) {
      console.log(JSON.stringify(formData, null, '\t')) // eslint-disable-line
      return resetForm()
    } else {
      setFieldErrors()
    }
  }

  const { firstName, name, email, telephone, cv, comments } = fields

  return (
    <form onSubmit={submitForm}>
      <Row>
        <Col xs={12} sm={5}>
          <Field
            label="First Name"
            name="firstName"
            type="text"
            value={firstName.value}
            error={firstName.error}
            onChange={handleChangeInput}
          />
        </Col>
        <Col xs={12} sm={5} smOffset={2}>
          <Field
            label="Name"
            name="name"
            type="text"
            value={name.value}
            error={name.error}
            onChange={handleChangeInput}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={5}>
          <Field
            label="Email"
            name="email"
            type="text"
            value={email.value}
            error={email.error}
            onChange={handleChangeInput}
          />
        </Col>
        <Col xs={12} sm={5} smOffset={2}>
          <Field
            label="Telephone Number"
            name="telephone"
            type="text"
            value={telephone.value}
            error={telephone.error}
            onChange={handleChangeInput}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Field
            label="Upload your CV"
            name="cv"
            type="file"
            value={cv.value}
            error={cv.error}
            onChange={handleChangeInput}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Field
            label="Comments"
            value={comments.value}
            error={comments.error}
            name="comments"
            type="textarea"
            onChange={handleChangeInput}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Typography variant="legend" align="left">
            Thought experiments (Gedankenexperimenten) are “facts” in the sense
            that they have a “real life” correlate in the form of
            electrochemical activity in the brain.
          </Typography>
        </Col>
      </Row>
      <Row end="xs" style={{ marginTop: 80 }}>
        <Col>
          <Button secondary>Send</Button>
        </Col>
      </Row>
    </form>
  )
}
