const initialState = {
  cid: '',
  code: '',
  value: '',
  mode: 'html',
  fontSize: 14,
  theme: 'chrome',
  syntax: ['Text', 'HTML','CSS','JavaScript','PHP','Python','Ruby','C++','C#','Java','Objective C','ActionScript','CoffeeScript','TypeScript','Batchfile','Haml','Handlebars','Haskell','Jade','JSON','JSX','LESS','SASS','SCSS','Stylus','LiveScript','Markdown','MySQL','SQL','Pascal','Perl','Rust','Shell (Bash)','SVG','Textfile','VBScript','XML'],
  isSaving: false,
  saveDelay: 500,
  autoRun: false,
  runAvailable: false,
  commands: [
    {value: 'CDNJS: Search', cmd: 'cdnjs:search'},
    {value: 'Google Fonts: Search', cmd: 'font:all'},
    {value: 'Color Picker', cmd: 'colorpicker:show'},
    {value: 'Open file form URL', cmd: 'openfile:url'},
    {value: 'Open file form PC', cmd: 'openfile:local'},
    {value: 'Snippet: for (...) { }', cmd: 'snippet:for'},
    {value: 'Random: Int', cmd: 'random:int'},
    {value: 'Random: Float', cmd: 'random:float'},
    {value: 'Random: Text', cmd: 'random:text'},
    {value: 'Random: UUID', cmd: 'random:uuid'},
    {value: 'Random: URL', cmd: 'random:url'},
    {value: 'Random: E-Mail', cmd: 'random:email'},
    {value: 'Random: Fisrt Name', cmd: 'random:firstname'},
    {value: 'Random: Last Name', cmd: 'random:lastname'},
    {value: 'Random: Full Name', cmd: 'random:fullname'},
    {value: 'Random: Hex-Color', cmd: 'random:hex'},
    {value: 'Random: IPv4 Adress', cmd: 'random:ip4'},
    {value: 'Random: IPv6 Adress', cmd: 'random:ip6'},
    {value: 'Random: Lorem Ipsum', cmd: 'random:lorem'},
    {value: 'Random: Letters and numbers', cmd: 'random:letnum'}
  ]
}

export default function currentStore(state = initialState, action) {

  const modeAvailableForRunning = (mode) => {
    mode = mode.toLowerCase();
    return ['html', 'markdown', 'jade'].indexOf(mode) >= 0
  }

  switch (action.type) {
    case 'EDITOR_CHANGE_MODE':
      return {
        ...state,
        mode: action.mode.toLowerCase(),
        runAvailable: modeAvailableForRunning(action.mode)
      }
    break;
    case 'EDITOR_CHANGE_VALUE':
      return {
        ...state,
        value: action.value
      }
    break;
    default:
      return state;
  }
}
