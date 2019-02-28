import React from 'react'
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
  cursor: pointer;
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
  color: #fefefe;
`

const IndexPage = () => (
  <ContentWrapper onClick={() => location.replace('mailto:hey@mix-tape.io')}>
    <Title>mix-tape.io creative technology</Title>
    <Availability>Available for projects Q3 2019</Availability>
  </ContentWrapper>
)

export default IndexPage
