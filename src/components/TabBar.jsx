import React, { Component } from 'react';
import styled from 'styled-components';
// material-ui
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const recordingIcon = (
  <FontIcon className="icon-mic">錄音</FontIcon>
);
const finderIcon = (
  <FontIcon className="icon icon-folder-open">檔案</FontIcon>
);
const settingsIcon = (
  <FontIcon className="icon icon-cog">設定</FontIcon>
);

const TableBarComponent = styled.div`
  .icon:before {
    margin-right: 6px;
  };
`;

class TabBar extends Component {
  static propTypes = {

  };

  render() {
    return (
      <TableBarComponent>
        <Paper>
          <BottomNavigation selectedIndex={this.props.selectedIndex}>
            <BottomNavigationItem
              icon={recordingIcon}
              onTouchTap={this.props.select(0)}
            />
            <BottomNavigationItem
              icon={finderIcon}
              onTouchTap={this.props.select(1)}
            />
            <BottomNavigationItem
              icon={settingsIcon}
              onTouchTap={this.props.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </TableBarComponent>
    );
  }
}

export default TabBar;
