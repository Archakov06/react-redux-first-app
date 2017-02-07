import React, { PropTypes, Component } from 'react'


export default class Tweets extends Component {

  constructor(props){
    super(props);
    this.input = undefined;
    this.addNewTweet = this.addNewTweet.bind(this);
  }

  addNewTweet() {
    this.props.addTweet(this.input.value);
    this.input.value = '';
  }

  render() {
    const { tweets } = this.props
    return (
      <div>
        <h3>Всего записей: <b>{ tweets.length }</b></h3>
        <ul>
          {
            tweets.map((item, index) => {
              return <li key={index}>#{item.id} - {item.text}</li>
            })
          }
        </ul>
        <input ref={node => { this.input = node; }} />
        <button onClick={::this.addNewTweet}>Добавить</button>
      </div>
    );
  }
}

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  addTweet: PropTypes.func.isRequired,
}
