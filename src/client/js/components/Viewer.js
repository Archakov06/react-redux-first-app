import React, { Component } from 'react'
import { SVGLink } from '../helpers/svg'

export default class Viewer extends Component {

  render() {

    const { currentStore } = this.props
    var viewer = <div></div>;

    if (currentStore.runAvailable) {
      viewer = (
        <div className="viewer">
          <div className="viewer__close">
            <svg>
              <SVGLink name="close" />
            </svg>
          </div>
          <iframe id="iframe-viewer" frameborder="0"></iframe>
        </div>
      )
    }

    return viewer
  }

}
