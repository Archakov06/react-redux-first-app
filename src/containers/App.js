import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components/User'
import Tweets from '../components/Tweets'
import * as tweetActions from '../actions/tweetActions'

class App extends Component {
  render() {
    const { user, tweets } = this.props
    const { addTweet } = this.props.tweetActions
    return <div>
      <User name={user.name} />
      <Tweets tweets={tweets} addTweet={addTweet} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tweetActions: bindActionCreators(tweetActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
