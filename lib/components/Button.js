import React from 'react'
import { oneOf } from 'prop-types'
import styled, { css } from 'styled-components'

import Icon from './Icon'
import validators from '../util/validators'

const colors = {
  blue: '#5a78ff',
  white: '#ffffff',
  darkBlue: '#3c3246'
}

const Wrapper = styled.button`
  background: none;
  border: 0;
  color: inherit;
  cursor: default;
  font: inherit;
  line-height: normal;
  overflow: visible;
  outline: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ color }) => colors[color]};

  width: 146px;
  height: 40px;
  padding: 9.5px 20.5px;

  ${({ size }) => size === 'large' && css`
    width: 169px;
    height: 48px;
    padding: 7.5px 24px;
  `}

  ${({ size }) => size === 'small' && css`
    width: 113px;
    height: 32px;
    padding: 7.5px 16px;
  `}

  ${({ stroke, color }) => (stroke && color === 'white') && css`
    border: 2px solid ${colors.blue};
    ${({ size }) => size === 'small' && css`
      border-width: 1px;
    `}
  `}
`

export const Button = props => {
  const { blue, white } = colors
  return (
    <Wrapper { ...props }>
      <Icon color={ props.color === 'white' ? blue : white } />
    </Wrapper>
  )
}

Button.defaultProps = {
  size: 'default',
  color: 'blue'
}

Button.propTypes = {
  size: oneOf(['large', 'default', 'small']),
  color: oneOf(['blue', 'white', 'darkBlue']),
  stroke: validators.stroke
}

export default Button
