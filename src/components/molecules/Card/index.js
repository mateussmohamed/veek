import React from 'react'
import styled from 'styled-components'

import { Icon } from 'atoms'

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  border: 1px solid #dfdfdf;
  margin-bottom: 45px;
  background-color: #fff;
`

const Image = styled.img`
  width: 100%;
  height: 170px;
  background-color: #25262c;
  background-image: url('/assets/thumbnail.jpg');
  background-size: cover;
  background-position: center center;
`

const Content = styled.section`
  width: 100%;
  padding: 20px 20px 0 20px;
  color: #000000;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
`

const Footer = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const User = styled.div`
  display: flex;
  align-items: center;
`

const UserImage = styled.div`
  width: 27px;
  height: 27px;
  display: inline-block;
  background-color: grey;
  border-radius: 100%;
  margin-right: 15px;
`

const UserName = styled.span`
  color: #848484;
  font-family: Lato, sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`

const PostedIn = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: flex-start;
`

const Timestamp = styled.div`
  margin-left: 5px;

  p {
    color: #848484;
    font-family: Lato, sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: normal;
    margin: 0;
  }
`

const Card = props => (
  <CardContainer {...props}>
    <Image />
    <Content>Lorem ipsum dolor</Content>
    <Footer>
      <User>
        <UserImage />
        <UserName>BY JOHN SMITH</UserName>
      </User>
      <PostedIn>
        <Icon name="clock" />
        <Timestamp>
          <p>25MIN</p>
          <p>AGO</p>
        </Timestamp>
      </PostedIn>
    </Footer>
  </CardContainer>
)

export default Card
