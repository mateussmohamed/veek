import React from 'react'

import {
  Icon,
  CardContainer,
  CardImage,
  CardContent,
  CardFooter,
  CardUser,
  CardUserImage,
  CardUserName,
  CardInformation,
  CardTimestamp,
} from 'atoms'

const Card = props => (
  <CardContainer {...props}>
    <CardImage />
    <CardContent>Lorem ipsum dolor</CardContent>
    <CardFooter>
      <CardUser>
        <CardUserImage />
        <CardUserName>BY JOHN SMITH</CardUserName>
      </CardUser>
      <CardInformation>
        <Icon name="clock" />
        <CardTimestamp>
          <p>25MIN</p>
          <p>AGO</p>
        </CardTimestamp>
      </CardInformation>
    </CardFooter>
  </CardContainer>
)

export default Card
