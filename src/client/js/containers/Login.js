import React, { Component } from 'react'
import { Link } from 'react-router'

import { SVGLink } from '../helpers/svg'
import SVGSprites from '../components/SVGSprites'

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <SVGSprites />
        <div className="login-box">
          <div className="login-box__tabs">
            <ul>
              <li className="active">Sign in</li>
              <li>Registration</li>
            </ul>
          </div>
          <div className="login-box__content">
            <ul>
              <li>
                <label>Login:</label>
                <input className="input" type="text" />
              </li>
              <li>
                <label>Password:</label>
                <input className="input" type="password" />
              </li>
              <li>
                <button className="button button--black">Login</button>
              </li>
              <li>
                <center>or</center>
              </li>
              <li>
                <button className="button button--white" onclick="location.href=/">
                  <SVGLink name="github" />
                  <span>Github</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
