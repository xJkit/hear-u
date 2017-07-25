import React, { Component } from 'react';
import styled from 'styled-components';
import { Recording, Settings, Login, Finder } from 'containers';
// materia-ui
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
// import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = (
  <FontIcon className="material-icons">錄音</FontIcon>
);
const favoritesIcon = (
  <FontIcon className="material-icons">檔案</FontIcon>
);
const settingsIcon = (
  <FontIcon className="material-icons">設定</FontIcon>
);

const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderComponent = styled.section``;
const ContentComponent = styled.section`
  flex: 1 0 auto;
`;
const FooterComponent = styled.section``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  select = index => () => this.setState({ selectedIndex: index });

  renderSelectedPage = () => {
    switch(this.state.selectedIndex) {
      case 0:
        return <Recording />;
      case 1:
        return <Finder />;
      case 2:
        return <Settings />;
      default:
        return <Login />;
    }
  }

  render() {
    return (
      <AppComponent>
        <HeaderComponent>
          <AppBar
            title="hearU"
          />
        </HeaderComponent>
        <ContentComponent>
          {this.renderSelectedPage()}
        </ContentComponent>
        <FooterComponent>
          <Paper>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                icon={recentsIcon}
                onTouchTap={this.select(0)}
              />
              <BottomNavigationItem
                icon={favoritesIcon}
                onTouchTap={this.select(1)}
              />
              <BottomNavigationItem
                icon={settingsIcon}
                onTouchTap={this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </FooterComponent>
      </AppComponent>
    );
  }
}

export default App;
