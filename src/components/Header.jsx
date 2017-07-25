import React, { Component } from 'react';

// material-ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Login = () => (
  <FlatButton label="登入" />
);

const Logged = () => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    iconStyle={{ color: 'white' }}
  >
    <MenuItem primaryText="登出" />
  </IconMenu>
);


class Header extends Component {
  render() {
    return (
      <AppBar
        title="hearU"
        showMenuIconButton={false}
        iconElementRight={<Logged />}
      />
    );
  }
}

export default Header;
