import React from 'react'

export const Box = ({children, ...props}) => <div {...props}>{ children }</div>
export const Input = props => <input {...props} />
export const Button = ({children, ...props}) => <button {...props}>{ children }</button>

export default Box
