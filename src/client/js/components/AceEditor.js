import React, { PropTypes, Component } from 'react';
import ace from 'brace';

import 'brace/mode/html'
import 'brace/theme/chrome'

export default class AceEditor extends Component {

  componentDidMount() {
    this.create(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorProps(nextProps);
  }

  componentWillUnmount() {
    this.destroy();
  }

  create(props) {
    const { id, name } = props;
    ace.config.set("basePath", "/public/js/ace");
    this.editor = ace.edit(name);
    this.editor.$blockScrolling = Infinity; // workaround for warnings
    if (props.defaultValue) {
      this.editor.setValue(props.defaultValue, props.defaultCursorPos);
    }
    this.setEditorProps(props);
    if (this.props.onMount) {
      this.props.onMount(id, this.editor, name);
    }
  }

  destroy() {
    const editor = this.editor;
    const { id, name } = this.props;
    if (editor) {
      if (this.props.onUnmount) {
        this.props.onUnmount(id, editor, name);
      }
      editor.destroy();	// clean up the entire editor
      this.editor = null;
    }
  }

  handleGutterMouseDown(e) {
    // This code is based on the following discussion:
    // 'Enable breakpoints in embedded editor'
    // https://groups.google.com/forum/#!msg/ace-discuss/sfGv4tRWZdY/ca1LuolbLnAJ
    //
    // In the onGutterMouseDown handler,
    // you may want to set/reset a break-point like this:
    //
    //   editor.getSession().setBreakpoint(row);
    //   editor.getSession().clearBreakpoint(row);
    //
    // and don't forget add some styling like this for break-points:
    //
    //   ace_gutter-cell.ace_breakpoint {
    //     border-radius: 20px 0px 0px 20px;
    //     box-shadow: 0px 0px 1px 1px red inset;
    //   }

    let row = -1;
    const target = e.domEvent.target;
    if (target.className.indexOf('ace_gutter-cell') !== -1
        && e.editor.isFocused()
        && e.clientX <= 25 + target.getBoundingClientRect().left) {
      row = e.getDocumentPosition().row;
    }
    this.props.onGutterMouseDown(e, e.editor, this.props.name, row);
    e.stop();
  }

  setEditorProps(props) {
    const editor = this.editor;
    const { name } = this.props;

    function handle(f) {
      return (...args) => f(...args, name);
    }

    if ('fontSize' in props) {
      editor.setFontSize(props.fontSize);
    }
    if ('highlightActiveLine' in props) {
      editor.setHighlightActiveLine(props.highlightActiveLine);
    }
    if ('mode' in props) {
      editor.getSession().setMode('ace/mode/' + props.mode);
    }
    if ('newLineMode' in props) {
      editor.getSession().setUseSoftTabs(props.useSoftTabs);
    }
    if ('onBlur' in props) {
      editor.on('blur', handle(props.onBlur));
    }
    if ('onChange' in props) {
      editor.on('change', handle(props.onChange));
    }
    if ('onCopy' in props) {
      editor.on('copy', handle(props.onCopy));
    }
    if ('onFocus' in props) {
      editor.on('focus', handle(props.onFocus));
    }
    if ('onGutterMouseDown' in props) {
      editor.on('guttermousedown', this.handleGutterMouseDown);
    }
    if ('onPaste' in props) {
      editor.on('paste', handle(props.onPaste));
    }
    if ('options' in props) {
      editor.setOptions(props.options);
    }
    if ('showGutter' in props) {
      editor.renderer.setShowGutter(props.showGutter);
    }
    if ('showPrintMargin' in props) {
      editor.setShowPrintMargin(props.showPrintMargin);
    }
    if ('readOnly' in props) {
      editor.setReadOnly(props.readOnly);
    }
    if ('tabSize' in props) {
      editor.getSession().setTabSize(props.tabSize);
    }
    if ('theme' in props) {
      editor.setTheme('ace/theme/' + props.theme);
    }
    if ('useSoftTabs' in props) {
      editor.getSession().setUseSoftTabs(props.useSoftTabs);
    }
    if ('useWorker' in props) {
      editor.getSession().setUseWorker(props.useWorker);
    }
    if ('useWrapMode' in props) {
      editor.getSession().setUseWrapMode(props.useWrapMode);
    }
  }

  render() {

    const { name, className, defaultStyle, width, height } = this.props;

    let { id } = this.props;

    if (!id) id = name;

    const style = {};

    if (defaultStyle) {
      for (var k in defaultStyle) {
        if (defaultStyle.hasOwnProperty(k)) {
          style[k] = defaultStyle[k];
        }
      }
    }
    
    if (width) style.width = width;
    if (height) style.height = height;

    return (
      <div id={id} className={className} style={style}></div>
    );
  }

}

AceEditor.propTypes = {
  className: React.PropTypes.string,
  defaultCursorPos: React.PropTypes.number,
  defaultStyle: React.PropTypes.object,
  defaultValue: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  height: React.PropTypes.string,
  highlightActiveLine: React.PropTypes.bool,
  id: React.PropTypes.string,
  mode: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  newlineMode: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onCopy: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onGutterMouseDown: React.PropTypes.func,
  onMount: React.PropTypes.func,
  onPaste: React.PropTypes.func,
  onUnmount: React.PropTypes.func,
  options: React.PropTypes.object,
  readOnly: React.PropTypes.bool,
  showGutter: React.PropTypes.bool,
  showPrintMargin: React.PropTypes.bool,
  tabSize: React.PropTypes.number,
  theme: React.PropTypes.string,
  useSoftTabs: React.PropTypes.bool,
  useWorker: React.PropTypes.bool,
  useWrapMode: React.PropTypes.bool,
  width: React.PropTypes.string
}
