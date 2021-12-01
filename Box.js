import React from 'react'
import './Style.css'

  

export const Box = (props) => <button className="BoardTiles" name={props.name} onClick={props.onClick}> {props.value}  </button>

export default Box