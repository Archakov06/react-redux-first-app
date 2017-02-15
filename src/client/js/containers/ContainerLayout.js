import React, { Component } from 'react'
import { Link } from 'react-router'

import { SVGLink } from '../helpers/svg'
import SVGSprites from '../components/SVGSprites'

export default class ContainerLayout extends Component {
  render() {
    return (
      <div className="container">
        <SVGSprites />
        {this.props.children}
      </div>
    )
  }
}
