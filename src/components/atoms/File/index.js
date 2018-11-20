import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  width: 150px;
  margin: 0;
  border-bottom: 3px solid;
  color: #283583;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
`

class File extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
    this.state = {
      fileName: 'Search a file',
    }
  }

  handleFileChange = e => {
    const file = e.target.files[0]

    this.props.onChange(file)
    this.setState({ fileName: file ? file.name : 'Search a file' })
  }

  render() {
    return (
      <FileContainer>
        <InputFile
          type="file"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleFileChange}
          ref={this.input}
        />
        <Message>Drag and drop a file or</Message>
        <FileName>{this.state.fileName}</FileName>
      </FileContainer>
    )
  }
}

File.defaultProps = {
  defaultValue: null,
}

File.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default File
