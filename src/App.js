import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';
import PostHeader from './components/PostHeader';

import './styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Post>
          <PostHeader />
        </Post>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
