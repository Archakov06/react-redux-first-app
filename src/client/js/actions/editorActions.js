export const editorChangeMode = (value) => {
  return {
    type: 'EDITOR_CHANGE_MODE',
    mode: value
  }
}

export const editorChangeValue = (value) => {
  return {
    type: 'EDITOR_CHANGE_VALUE',
    value: value
  }
}
