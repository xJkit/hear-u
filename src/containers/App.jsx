import React, { Component } from 'react';
import styled from 'styled-components';
import { Recording, Settings, Login, Finder } from 'containers';
import { TabBar } from 'components';
// materia-ui
import AppBar from 'material-ui/AppBar';

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
          <TabBar
            selectedIndex={this.state.selectedIndex}
            select={this.select}
          />
        </FooterComponent>
      </AppComponent>
    );
  }
}

export default App;
