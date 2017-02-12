import React, { Component } from 'react'

const SVGLink = (props) => {
  return <svg className="icon">
    <use xlinkHref={ '#' + props.name }></use>
  </svg>;
}

export { SVGLink }
