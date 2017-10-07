import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'
import styled from 'styled-components'

import 'normalize.css'
import './index.scss'

import favicon from './images/favicon.ico'

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
`

const TemplateWrapper = ({ children }) =>
  <Wrapper>
    <Helmet
      title="mix-tape.io creative technology"
      meta={[
        { name: 'description', content: 'mix-tape creative technology' },
        { name: 'keywords', content: '' },
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Typekit kitId="xbd8dom" />
    {children()}
  </Wrapper>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
