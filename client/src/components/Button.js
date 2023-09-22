import React from 'react'
import Wrapper from '../assets/wrappers/ButtonWrapper.js'

const Button = ({text}) => {
  return (
    <Wrapper>
        <button className = "button-9">{text}</button>
    </Wrapper>
  )
}

export default Button