import React, { Component } from 'react'
import { SVGLink } from '../helpers/svg'

export default class Header extends Component {

  selectURL(){
    document.querySelector('#code-url').select();
  }

  modeChange(event){
    const { editorChangeMode } = this.props
    editorChangeMode(event.target.value);
    console.log(event.target.value);
  }

  render() {

    const { currentStore } = this.props
    var runItem = '';

    if (currentStore.runAvailable) {
      runItem = (
        <li>
          <input className="header__autorun-checkbox" flow="down" tooltip="Auto run" type="checkbox" ng-model="autoRun"/>
          <button className="button button--white button--save" ng-click="appCtrl.runCode()">
            <svg>
              <SVGLink name="play" />
            </svg><span>Run Code</span>
          </button>
        </li>
      );
    }

    return (
      <div className="header clearfix">
        <div className="header__logo">
          <a href="">
            <svg width="111" height="18">
              <SVGLink name="logo" />
            </svg>
          </a>
        </div>
        <div className="header__auth">
          <ul>
            { runItem }
            <li>
              <button className="button button--white button--save" ng-click="appCtrl.saveCode()">
                <svg>
                  <SVGLink name="save" />
                </svg><span>{ !currentStore.isSaving ? 'Save' : 'Saving...' }</span>
              </button>
            </li>
            <li flow="down" tooltip="Copy link">
              <svg id="link-svg">
                <SVGLink name="link" />
              </svg>
              <input id="code-url" className="button button--white" value={ location.href } type="text" onClick={::this.selectURL} readOnly="readonly"/>
            </li>
            <li flow="down" tooltip="Change syntax mode">
              <label id="select-mode">
                <select onChange={::this.modeChange} className="button button--white">
                  {
                    currentStore.syntax.map((item, index) => {
                      return <option value={item} key={index}>{item}</option>
                    })
                  }
                  <option></option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
