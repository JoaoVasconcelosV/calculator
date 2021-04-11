import React from 'react'
import './button.css'

const Button = (props) => {
  let classe = 'button '
  classe += props.operation ? 'operation' : '' ||
    props.double ? 'double' : '' ||
    props.triple ? 'triple' : ''

  return (
    <button onClick={_ => props.click(props.label)} className={classe}>
      {props.label}
    </button>
  )
}

export default Button