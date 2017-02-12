import React, { Component } from 'react'
import { SVGLink } from '../helpers/svg'

export default class Shadow extends Component {

  render() {
    return (
      <div className="tabs-panel">
        <ul className="tabs-panel__tabs">
          <li className="active"><span>index.html</span>
            <svg id="close-tab">
              <SVGLink name="close" />
            </svg>
          </li>
          <li><span>script.js</span>
            <svg id="close-tab">
              <SVGLink name="close" />
            </svg>
          </li>
        </ul>
        <ul className="tabs-panel__panel">
          <li id="add-tab">
            <svg>
              <SVGLink name="add-btn" />
            </svg>
          </li>
          <li id="setting-btn" ng-click="appCtrl.settingsShow()">
            <svg>
              <SVGLink name="options-btn" />
            </svg>
          </li>
        </ul>
      </div>
    );
  }

}
