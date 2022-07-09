import React from 'react'
import styled from 'styled-components'

import { Label, File, TextField, TextArea } from '../../atoms'

const StyledField = styled.div`
  display: block;
  margin-bottom: 25px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 8px 0 0 0;
`

interface FieldProps {
  label: string
  name: string
  type: string
  value: string
  error: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const getComponent = props => ({
  textarea: <TextArea {...props} />,
  text: <TextField {...props} />,
  file: <File {...props} />,
})

export const Field = ({ error, ...props }: FieldProps) => {
  return (
    <StyledField>
      <Label>{props.label}</Label>
      {getComponent(props)[props.type]}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledField>
  )
}
