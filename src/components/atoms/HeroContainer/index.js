import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  flex-direction: column;

  @media only screen and (min-width: 0em) {
    padding: 20px 0;
  }
  @media only screen and (min-width: 48em) {
    padding: 200px 0;
  }
`

export default HeroContainer
