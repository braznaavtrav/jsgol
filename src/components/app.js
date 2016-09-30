import React from 'react';
import GameBoard from '../containers/game-board';
import Header from '../containers/header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Header />
      <GameBoard />
    </div>
  </MuiThemeProvider>
);

export default App;