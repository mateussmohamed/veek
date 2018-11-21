import React from 'react'

import { HeroContainer, HeroContent, Typography, ScrollDown } from 'atoms'

const Hero = () => {
  const heroContainer = React.createRef()

  return (
    <HeroContainer ref={heroContainer}>
      <HeroContent>
        <Typography variant="title">Sua Operadora Digital</Typography>
        <Typography variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          tempus odio. Nam gravida diam eros, non ultricies velit varius ut.
        </Typography>
      </HeroContent>
      <ScrollDown to={heroContainer} />
    </HeroContainer>
  )
}

export default Hero
