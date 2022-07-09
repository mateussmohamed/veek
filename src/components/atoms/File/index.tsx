import React from 'react'
import styled, { css } from 'styled-components'

const baseStyle = css`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
`

const InputFile = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
`

const FileContainer = styled.div`
  ${baseStyle};
  height: 180px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Message = styled.h4`
  margin: 0 10px 0 0;
  color: #818182;
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
`

const FileName = styled.h5`
  max-width: 350px;
  margin: 0;
  border-bottom: 3px solid;
  color: #283583;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
  word-break: break-all;
`

interface FileProps {
  name: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const File = (props: FileProps) => {
  const [file, setFile] = React.useState(null)

  const handleFileChange = e => {
    const file = e.target.files[0]

    props.onChange(e)
    setFile({ fileName: file && file.name })
  }

  return (
    <FileContainer>
      <InputFile
        type="file"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={handleFileChange}
      />
      <Message>Drag and drop a file or</Message>
      <FileName>{props.value ? file.fileName : 'Search a file'}</FileName>
    </FileContainer>
  )
}
