import React from 'react'
import styled, { keyframes } from 'styled-components'

const scrollDown = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
`

const ScrollDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`

const ScrollDownStyled = styled.a`
  padding-bottom: 60px;
  color: #000;
  font-size: 18px;
  font-weight: 400px;
  text-decoration: none;
  transition: opacity 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.5;
    span {
      animation-play-state: paused;
    }
  }

  span {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 4px solid #000;
    border-bottom: 4px solid #000;
    transform: rotate(-45deg);
    animation: ${scrollDown} 2s infinite;
    box-sizing: border-box;
  }
`

export const ScrollDown = ({
  to,
}: {
  to: React.MutableRefObject<HTMLElement>
}) => {
  const handleScroll = to => {
    window.scrollTo({
      top: to.current.offsetHeight,
      behavior: 'smooth',
    })
  }

  return (
    <ScrollDownContainer>
      <ScrollDownStyled onClick={() => handleScroll(to)}>
        Scroll Down
        <span />
      </ScrollDownStyled>
    </ScrollDownContainer>
  )
}
