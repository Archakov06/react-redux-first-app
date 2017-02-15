import React, { Component } from 'react'
import { Link } from 'react-router'

import { SVGLink } from '../helpers/svg'
import SVGSprites from '../components/SVGSprites'

import ContainerLayout from './ContainerLayout'

export default class Login extends Component {
  render() {
    return (
      <ContainerLayout>
        <div className="login-box">
          <div className="login-box__tabs">
            <ul>
              <li><Link activeClassName="active" to="/auth/login">Sign in</Link></li>
              <li><Link activeClassName="active" to="/auth/registration">Registration</Link></li>
            </ul>
          </div>
          {this.props.children}
        </div>
      </ContainerLayout>
    )
  }
}
