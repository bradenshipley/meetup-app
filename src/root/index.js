import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';

import DrummerList from '../drummer-list';
import TopNav from './TopNav';
import Footer from './Footer';

// Component Definition
class Root extends Component {
  render() {
    return (
      <Paper square>
        <div className="App">
          <TopNav />
          {/* <DrummerList /> */}
          <Footer />
        </div>
      </Paper>
    );
  }
}

export default Root;
