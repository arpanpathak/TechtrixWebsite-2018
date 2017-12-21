import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../assets/css/Fade.css';

const Fade = ({ location, children }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames="fade"
      timeout={1000}>
        { children }
    </CSSTransition>
  </TransitionGroup>
)

export default Fade;
