import React, { Component } from 'react';
import $ from 'jquery';
import EventList from './EventList';
import EventIcon from './EventIcon';
import '../assets/css/Events.css';
import {SectionsContainer, Section,Header,ScrollToTopOnMount} from 'react-fullpage';

const coding = [
  {id: 1, name: 'Logia', icon: 'code'},
  {id: 2, name: 'Bugs Funny', icon: 'bug_report'},
  {id: 3, name: 'Web Designing', icon: 'web'},
  {id: 4, name: 'Electronics', icon: ''}
];
const robotics = [
  {id: 1, name: 'Battle O Field', icon: ''},
  {id: 2, name: 'Kick O Bot', icon: ''},
  {id: 3, name: 'Sprint O Bot', icon: ''},
  {id: 4, name: 'Transporter', icon: ''},
  {id: 5, name: 'Line Follower', icon: ''},
  {id: 6, name: 'Battle Bots', icon: ''}
];
const gaming = [
  {id: 1, name: 'CS 1.6', icon: ''},
  {id: 2, name: 'Dota 2', icon: ''},
  {id: 3, name: 'Fifa 11', icon: ''},
  {id: 4, name: 'NFS Most Wanted', icon: ''},
  {id: 5, name: 'CoC Clan', icon: ''},
  {id: 6, name: 'CoC Single', icon: ''},
  {id: 7, name: 'Mini Militia', icon: ''},
  {id: 8, name: 'Clash Royal', icon: ''}
];
const creative = [
  {id: 1, name: 'Behind the Lens', icon: ''},
  {id: 2, name: 'Canvas', icon: ''},
  {id: 3, name: 'Director\'s Cut', icon: ''},
  {id: 4, name: 'Logo Designing', icon: ''},
  {id: 5, name: 'T-Shirt Painting', icon: ''}
];
const geek = [
  {id: 1, name: 'Question Mark', icon: ''},
  {id: 2, name: 'Fandom Quiz', icon: ''},
  {id: 3, name: 'Mathemagic', icon: ''},
  {id: 4, name: 'Spell Bee', icon: ''},
  {id: 5, name: 'Sudoku', icon: ''},
  {id: 6, name: 'Verbose', icon: ''}
];
const fun = [
  {id: 1, name: 'Minute to Win it', icon: ''},
  {id: 2, name: 'Beg-Borrow-Steal', icon: ''},
  {id: 3, name: 'Antakshari', icon: ''},
  {id: 4, name: 'Treasure Hunt', icon: ''},
  {id: 5, name: 'One Shot', icon: ''}
];


class Events extends Component {
  componentDidMount() {
    $('.contentWrap').css('height', '100%').css('height', '-=64px');
    $(window).resize(() => {
      $('.contentWrap').css('height', '100%').css('height', '-=64px');
    });
  }

  render() {
    let options = {
          sectionClassName:     'section-fullpage',
          anchors:              ['coding', 'robotics', 'gaming','creative','fun','geek'],
          scrollBar:            false,
          navigation:           true,
          verticalAlign:        false,
          sectionPaddingTop:    '0',
          sectionPaddingBottom: '50px',
          // arrowNavigation:      true
    };
    return(
      <div className='Events'>
        <div className='contentWrap fullpage'>
          <EventIcon />
          <ScrollToTopOnMount />
          <SectionsContainer {...options}>
            <Section color="#13273A" className="section-fullpage"><EventList id="1" eventCategory={coding} categoryName='CODING' pageno="0" /></Section>
            <Section color="#07121D"><EventList id="2" eventCategory={robotics} categoryName='ROBOTICS' pageno="1" /></Section>
            <Section color="#051905"><EventList id="3" eventCategory={gaming} categoryName='GAMING' pageno="2" /></Section>
            <Section color="#290F38"><EventList id="4" eventCategory={creative} categoryName='CREATIVE' pageno="3"/></Section>
            <Section color="#0F3438"><EventList id="5" eventCategory={geek} categoryName='GEEK' pageno="4"/></Section>
            <Section color="#273746"><EventList id="6" eventCategory={fun} categoryName='FUN' pageno="5" /></Section>
          </SectionsContainer>
        </div>
      </div>
    );
  }
}

export default Events;
