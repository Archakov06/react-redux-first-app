import React, { Component } from 'react'

export default class RegistrationLayout extends Component {
  render() {
    return (
      <div id="registration" className="login-box__content">
        <ul>
          <li>
            <label>Login:</label>
            <input className="input" type="text" />
          </li>
          <li>
            <label>E-Mail:</label>
            <input className="input" type="password" />
          </li>
          <li>
            <label>Password:</label>
            <input className="input" type="password" />
          </li>
          <li>
            <label>Repeat password:</label>
            <input className="input" type="password" />
          </li>
          <br/>
          <li>
            <button className="button button--black">Registration</button>
          </li>
        </ul>
      </div>
    )
  }
}
