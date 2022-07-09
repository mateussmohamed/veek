import styled from 'styled-components'

export const TextField = styled.input<HTMLInputElement>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  color: #000;
  font-size: 18px;
  font-weight: bold;

  :active,
  :focus {
    box-shadow: 1px 1px 10px 0px rgba(235, 91, 73, 0.5);
    outline: 0;
  }
`
