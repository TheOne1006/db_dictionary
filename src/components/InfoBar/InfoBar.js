import React, {Component} from 'react';

export default class InfoBar extends Component {

  render() {
    const styles = require('./InfoBar.scss');
    return (
      <div className={styles.infoBar + ' well'}>
        <div className="container">
          This is an info bar
          {' '}
          <strong>no info!</strong>
        </div>
      </div>
    );
  }
}
