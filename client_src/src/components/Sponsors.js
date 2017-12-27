import React, { Component } from 'react';
import '../assets/css/Sponsors.css';
import $ from 'jquery';
class Sponsors extends Component {
  componentDidMount() {
    // $('.Navigation-Anchor')[0].click( );
    $('.contentWrap').css('height', '100%').css('height', '-=64px');
    $(window).resize(() => {
      $('.contentWrap').css('height', '100%').css('height', '-=64px');
    });
  }
  render() {
  	let sponsors=['1','2','3','4','5','6','7'];
    return(
      <div className='Sponsors' >
        <div className='contentWrap' style={{background: '#07121D'}}>
        	<h1 style={{fontFamily: 'latina', textAlign: 'center'}} className='amber-text'> OUR PREVIOUS YEAR SPONSORS </h1>
        	<div className='sponsor'>
        	{
        		sponsors.map((i)=>
        			<img src={require(`../assets/images/sponsors/${i}.png`)} alt="" />

        		)
        	}
        	</div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
