import React, { Component } from 'react'
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
            return <span className='login-box__error'>Invalid email</span>
        }
    },
    fullname: {
        rule: value => {
            return /^[a-zA-Z ]+$/.test(value);
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

export default class RegistrationLayout extends Component {

  submitForm(e){
    e.preventDefault();
    var form = e.target;
    fetch('/auth/registration', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.elements['email'].value,
        fullname: form.elements['fullname'].value,
        password: form.elements['password'].value,
        password2: form.elements['password2'].value,
      })
    })
  }

  render() {
    return (
      <div id="registration" className="login-box__content">
        <Validation.components.Form onSubmit={this.submitForm}>
          <ul>
            <li>
              <label>E-Mail:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='email@domain.com' className="input" type="email" name='email' validations={['required', 'email']}/>
            </li>
            <li>
              <label>Fullname:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='Amon Bower' className="input" type="text" name='fullname' validations={['required','fullname']}/>
            </li>
            <li>
              <label>Password:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='*******' className="input" name='password' type="password" validations={['required','password']}/>
            </li>
            <li>
              <label>Repeat password:</label>
              <Validation.components.Input autoComplete="off" value="" placeholder='*******' className="input" name='password2' type="password" validations={['required','password']}/>
            </li>
            <br/>
            <li>
              <Validation.components.Button className="button button--black">Registration</Validation.components.Button>
            </li>
          </ul>
        </Validation.components.Form>
      </div>
    )
  }
}
