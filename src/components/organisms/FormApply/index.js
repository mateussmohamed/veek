import React, { Component } from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

import { Button, Typography } from 'atoms'
import { Field } from 'molecules'

import {
  isRequired,
  isEmail,
  isTelephone,
  isDocument,
  maxLength,
} from './rules'

class FormApply extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {
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
      },
    }
  }

  handleChangeInput = e => this.validField(e.target.name, e.target.value)

  getFieldError = (rules, value) =>
    rules
      .reduce((acc, rule) => acc.concat(rule(value)), [])
      .find(error => !!error) || ''

  setFieldErrors = () => {
    const invalidFields = Object.entries(this.state.fields).reduce(
      (acc, [key, field]) => ({
        ...acc,
        [key]: {
          ...field,
          error: this.getFieldError(field.rules, field.value),
        },
      }),
      {},
    )

    this.setState({ fields: invalidFields })
  }

  validField = async (name, value) => {
    const field = this.state.fields[name]
    const error = this.getFieldError(field.rules, value)

    await this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...field, value, error: error },
      },
    })
  }

  isValid = () => {
    const fieldsValues = Object.entries(this.state.fields)
    const fieldWithErrors = fieldsValues.filter(
      ([, field]) => !field.value || !!field.error,
    )

    return fieldWithErrors.length === 0
  }

  resetForm = () => {
    const fields = Object.entries(this.state.fields).reduce(
      (acc, [key, field]) => ({
        ...acc,
        [key]: { ...field, error: '', value: '' },
      }),
      {},
    )
    this.setState({ fields })
  }

  submitForm = e => {
    e.preventDefault()

    const formData = Object.entries(this.state.fields).reduce(
      (acc, [key, field]) => {
        acc[key] = field.value
        return acc
      },
      {},
    )

    if (this.isValid()) {
      console.log(JSON.stringify(formData, null, '\t')) // eslint-disable-line
      return this.resetForm()
    } else {
      this.setFieldErrors()
    }
  }

  render() {
    const { fields } = this.state
    const { firstName, name, email, telephone, cv, comments } = fields

    return (
      <form onSubmit={this.submitForm}>
        <Row>
          <Col xs={12} sm={5}>
            <Field
              label="First Name"
              value={firstName.value}
              error={firstName.error}
              name="firstName"
              onChange={this.handleChangeInput}
            />
          </Col>
          <Col xs={12} sm={5} smOffset={2}>
            <Field
              label="Name"
              value={name.value}
              error={name.error}
              name="name"
              onChange={this.handleChangeInput}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={5}>
            <Field
              label="Email"
              value={email.value}
              error={email.error}
              name="email"
              onChange={this.handleChangeInput}
            />
          </Col>
          <Col xs={12} sm={5} smOffset={2}>
            <Field
              label="Telephone Number"
              value={telephone.value}
              error={telephone.error}
              name="telephone"
              onChange={this.handleChangeInput}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field
              label="Upload your CV"
              value={cv.value}
              error={cv.error}
              name="cv"
              type="file"
              onChange={this.handleChangeInput}
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
              onChange={this.handleChangeInput}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Typography variant="legend">
              Thought experiments (Gedankenexperimenten) are “facts” in the
              sense that they have a “real life” correlate in the form of
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
}
export default FormApply
