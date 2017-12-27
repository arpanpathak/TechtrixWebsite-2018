import React from 'react';
import Slider from './Slider';
import '../assets/css/EventList.css';
import '../assets/css/EventDetails.css';
import EventDetails from './EventDetails.js';

const EventList = (props) => (
  <div className='section page' pageno={props.pageno}>
    <Slider id={props.id}>
      <div id={`slider${props.id}`}>
        <div className='slides center'>
          <div className='middle-indicator'>
            <div className='left'>
              <span id='prevSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_left</i></span>
            </div>
            <div className='right'>
              <span id='nextSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_right</i></span>
            </div>
          </div>
          {props.eventCategory.map((_event) =>
            <div key={_event.id} className='slide white-text'>
              <div className='slide-content'>
                <h2 className='amber-text' style={{fontFamily: "latina"}}>{props.categoryName}</h2>
                <i className="material-icons">{_event.icon}</i>
                <div className='eventBtn'>
                  <a  className='btn btn-large waves-effect amber black-text' id={ `show_${props.categoryName+_event.id}` }>{_event.name}</a>
                </div>
                <EventDetails id={`event_${props.categoryName+_event.id}` } trigger={`#show_${props.categoryName+_event.id}` } eventName={_event.name} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Slider>
  </div>
);

export default EventList;
