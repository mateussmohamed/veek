import React from 'react'

import { FullContainer, HeroContent, Typography, ScrollDown } from '../../atoms'

export const Hero = () => {
  const inputRef = React.useRef<HTMLElement>()

  return (
    <FullContainer ref={inputRef}>
      <HeroContent>
        <Typography variant="title">Sua Operadora Digital</Typography>
        <Typography variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          tempus odio. Nam gravida diam eros, non ultricies velit varius ut.
        </Typography>
      </HeroContent>
      <ScrollDown to={inputRef} />
    </FullContainer>
  )
}
