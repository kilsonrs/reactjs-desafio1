import React, { Component, Fragment } from 'react';

import './style.css';

export default class PostHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="avatar">
            <img src="" />
          </div>
          <div className="author">
            <strong>Autor</strong>
            <p>Hora</p>
            <line />
          </div>
        </div>
        <article>ArticleArticleArticleArticleArticleArticleArticleArticle</article>
      </Fragment>
    );
  }
}
