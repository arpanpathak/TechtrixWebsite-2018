import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Register from './Register';
import Gallery from './Gallery';
import Sponsors from './Sponsors';
import About from './About';
import Contact from './Contact';
import Fade from './Fade.js';
import Team from './Team.js';

const Main = ({ location }) => (
  <main>
    <Fade location={location}>
      <Switch location={location}>
        <Route exact path='/' component={Home} />
        <Route exact path='/events' render={ () => <div className='bgOverlay'><Events /></div> } />
        <Route exact path='/signup' render={ () => <div className='bgOverlay'><Register /></div> } />
        <Route exact path='/gallery' render={ () => <div className='bgOverlay'><Gallery /></div>  } />
        <Route exact path='/team' render={ () => <div className='bgOverlay'><Team /></div>  } />
        <Route exact path='/sponsors' render={ () => <div className='bgOverlay'><Sponsors /></div> } />
        <Route exact path='/about' render={ () => <div className='bgOverlay'><About /></div> } />
        <Route exact path='/contact' render={ () => <div className='bgOverlay'><Contact /></div> } />
      </Switch>
    </Fade>
  </main>
);

export default Main;
