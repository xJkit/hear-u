import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from 'actions';
// material-ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    logged: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  renderLogButton = () => {
    if (this.props.logged) {
      const LoginSection = styled.div`
      `;
      const iconButton = (
        <LoginSection>
          <span>歡迎回來！ {this.props.account}</span>
          <IconButton><MoreVertIcon /></IconButton>;
        </LoginSection>
      )

      return (
        <IconMenu
          iconButtonElement={iconButton}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          iconStyle={{ color: 'white' }}
        >
          <MenuItem
            primaryText="登出"
            onTouchTap={() => this.props.logout()}
          />
        </IconMenu>
      );
    }
    return (
      <FlatButton
        label="登入"
        onTouchTap={() => this.props.login({ account: 'test', password: '123' })}
      />
    );
  }

  render() {
    return (
      <AppBar
        title="hearU"
        showMenuIconButton={false}
        iconElementRight={this.renderLogButton()}
      />
    );
  }
}

const mapStateToProps = state => ({
  account: state.auth.account,
  logged: state.auth.logged,
});

export default connect(mapStateToProps, {
  login: actions.auth.login,
  logout: actions.auth.logout,
})(Header);
