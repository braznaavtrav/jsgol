import React from 'react';
import GameStage from '../containers/game-stage';
import GamePixels from '../containers/game-pixels';
import Header from '../containers/header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Header />
      <GameStage>
        <GamePixels />
      </GameStage>
    </div>
  </MuiThemeProvider>
);

export default App;