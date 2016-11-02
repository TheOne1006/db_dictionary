import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer'
  }
};

// const menuItems = [
//   {
//     route: 'get-started',
//     text: 'Get Started'
//   }, {
//     route: 'customization',
//     text: 'Customization'
//   }, {
//     route: 'components',
//     text: 'Components'
//   }
// ];

const MainHeader = () => (
  <AppBar
    title={<span style={styles.title} > Title </span>}
    iconElementLeft={<IconButton> <NavigationClose/> </IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default MainHeader;
