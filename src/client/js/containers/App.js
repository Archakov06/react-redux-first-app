import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { currentStore } = this.props;
    const editorActions = this.props.editorActions;
    return (
      <div>
        <ul>
          <li><Link to='/login'>Войти</Link></li>
          <li><Link to='/asd'>123</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
