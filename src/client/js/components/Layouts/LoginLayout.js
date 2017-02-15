import React, { Component } from 'react'
import { SVGLink } from '../../helpers/svg'

export default class LoginLayout extends Component {
  render() {
    return (
      <div id="login" className="login-box__content">
        <ul>
          <li>
            <label>Login:</label>
            <input placeholder="E-Mail or Login" className="input" type="text" />
          </li>
          <li>
            <label>Password:</label>
            <input placeholder="Your passsword" className="input" type="password" />
          </li>
          <br/>
          <li>
            <button className="button button--black">Login</button>
          </li>
          <li>
            <button className="button button--white" onclick="location.href=/">
              <SVGLink name="github" />
              <span>Github</span>
            </button>
          </li>
        </ul>
      </div>
    )
  }
}
