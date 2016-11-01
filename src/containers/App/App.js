import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { InfoBar, MainHeader } from 'components';
import config from '../../config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// import { connect } from 'react-redux';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { push } from 'react-router-redux';
// import { asyncConnect } from 'redux-async-connect';


// @asyncConnect([{
//   promise: ({store: {dispatch, getState}}) => {
//     const promises = [];
//
//     if (!isInfoLoaded(getState())) {
//       promises.push(dispatch(loadInfo()));
//     }
//
//     return Promise.all(promises);
//   }
// }])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet {...config.app.head}/>
          <MainHeader />
          <InfoBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}
