import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContentWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
`

const Title = styled.h1`
  margin-top: 0;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #888;
`

const Availability = styled.h2`
  font-size: 5.6rem;
  font-weight: 300;
  line-height: 1;
  margin-top: 0;
  color: #fff;
`

const IndexPage = () =>
  <ContentWrapper>
    <Title>mix-tape.io creative technology</Title>
    <Availability>Available for projects Q1 2018</Availability>
  </ContentWrapper>

export default IndexPage
