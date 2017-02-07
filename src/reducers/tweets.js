const initialState = [

];

const tweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
}

export default function tweets(state = initialState, action) {

  switch (action.type) {
    case 'ADD_TWEET':
      return [
        ...state,
        tweet(undefined, action)
      ];
    default:
      return state;
  }

}
