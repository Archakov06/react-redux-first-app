import React, { Component } from 'react'
import AceEditor from './AceEditor';
import io from 'socket.io-client'
//let socket = io('//' + location.origin)

export default class Editor extends Component {

  componentDidMount() {
    socket.on('server:event', (data) => {
      console.log(data);
    })
  }

  onChange(e){
    const value = ace.edit('editor').getValue();
    const { editorChangeValue } = this.props
    editorChangeValue(value);
  }

  render() {
    const { currentStore } = this.props
    return (
      <div style={{width: currentStore.runAvailable ? '50%' : '100%'}} className="editor">
        <AceEditor
          mode={ currentStore.mode }
          theme={ currentStore.theme }
          onChange={ ::this.onChange }
          fontSize={ currentStore.fontSize }
          name="editor"
        />
      </div>
    )
  }

}
