let tid = 0;

export const addTweet = (text) => {
  return {
    type: 'ADD_TWEET',
    id: tid++,
    text: text
  }
}
