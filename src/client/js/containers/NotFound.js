import React, { Component } from 'react'
import { Link } from 'react-router'

import { SVGLink } from '../helpers/svg'
import SVGSprites from '../components/SVGSprites'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <SVGSprites />
        <div className="shadow-block shadow-error">
          <div className="center center-loading">
            <svg>
              <SVGLink name="logo" />
            </svg>
            <span>Not found</span>
            <button className="button button--black" onclick="location.href=/">CREATE CODE</button>
          </div>
        </div>
      </div>
    )
  }
}
