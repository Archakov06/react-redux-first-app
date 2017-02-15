import React, { Component } from 'react'
import { SVGLink } from '../../helpers/svg'
import Validation from 'react-validation'
import validator from 'validator'

Object.assign(Validation.rules, {
    required: {
        rule: value => {
            return value.toString().trim();
        },
        hint: value => {
            return <span className='login-box__error'>Required</span>
        }
    },
    email: {
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span className='login-box__error'>{value} isnt an Email.</span>
        }
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const password2 = components.password2.state;
            const isBothUsed = password
                && password2
                && password.isUsed
                && password2.isUsed;

            const isBothChanged = isBothUsed && password.isChanged && password2.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }

            return password.value === password2.value;
        },
        hint: () => <span className="login-box__error">Passwords should be equal.</span>
    }
});

export default class LoginLayout extends Component {

  submitForm(e){
    e.preventDefault();
    var form = e.target;
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.elements['email'].value,
        password: form.elements['password'].value,
      })
    })
  }

  render() {
    return (
      <div id="login" className="login-box__content">
        <Validation.components.Form onSubmit={this.submitForm}>
          <ul>
            <li>
              <label>Login:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='email@domain.com' className="input" type="email" name='email' validations={['required', 'email']}/>
            </li>
            <li>
              <label>Password:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='*******' className="input" name='password' type="password" validations={['required']}/>
            </li>
            <br/>
            <li>
              <Validation.components.Button className="button button--black">Login</Validation.components.Button>
            </li>
            <li>
              <button className="button button--white">
                <SVGLink name="github" />
                <span>Github</span>
              </button>
            </li>
          </ul>
        </Validation.components.Form>
      </div>
    )
  }
}
