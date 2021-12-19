import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import news from './news.json';

import { Title, Content } from './components';

export class NewsList extends Component {
  render() {
    return (
      <div className="">
        {news.map(el => (
          <Fragment key={el.id}>
            <h2>{el.title}</h2>
          </Fragment>
        ))}
      </div>
    );
  }
}
