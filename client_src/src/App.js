import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import BackgroundCover from './components/BackgroundCover';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = withRouter(({ location }) => (
  <div className='App'>
    <BackgroundCover />
    <Navbar />
    <Main location={location} />
  </div>
));

export default App;
