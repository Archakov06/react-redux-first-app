import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import SVGSprites from '../components/SVGSprites'
import * as editorActions from '../actions/editorActions'

import Header from '../components/Header'
import Editor from '../components/Editor'
import Viewer from '../components/Viewer'
import Shadow from '../components/Shadow'
import Tabs from '../components/Tabs'

import '../../styles/app.styl'

export class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { currentStore } = this.props
    const editorActions = this.props.editorActions;
    return (
      <div>

        <SVGSprites />

        <Header
          currentStore={ currentStore }
          editorChangeMode={ editorActions.editorChangeMode }
        />

        <Tabs currentStore={ currentStore } />

        <Editor
          currentStore={ currentStore }
          editorChangeValue={ editorActions.editorChangeValue } />

        <Viewer currentStore={ currentStore } />

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentStore: state.currentStore,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editorActions: bindActionCreators(editorActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
