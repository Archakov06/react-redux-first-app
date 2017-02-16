import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => {
      console.log('Я родился');
    },1000)
  }

  render() {
    const { currentStore } = this.props;
    const editorActions = this.props.editorActions;
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
