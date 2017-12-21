import React from 'react';
import Slider from './Slider';
import $ from 'jquery';
import '../assets/css/Team.css';
import '../assets/css/Slider.css';
const teams=["ROBOTICS","WEB DEVELOPMENT","GAMING","CREATIVE","FUN"];
var people={
	"ROBOTICS": [
		{name: "abc"},{name: "abc1"},{name: "abc2"}
	],
	"WEB DEVELOPMENT": [
		{name: "Pranit Bose"},{name: "Arpan Pathak",img: "https://www.limestone.edu/sites/default/files/user.png"},{name: "abc2"}
	],
	"GAMING": [
		{name: "Kaustav Biswas",contact: "9477305001",email:"kbdudola@gmail.com"},
		{name: "ABHRAK CHATTERJEE",contact: "8585044444",email:"abhrakchatterjee@gmail.com"},
	],
	"CREATIVE": [
		{name: "abc"},{name: "abc1"},{name: "abc2"}
	],
	"FUN": [
		{name: "abc"},{name: "abc1"},{name: "abc2"}
	]
};
var img="https://www.limestone.edu/sites/default/files/user.png";
class Team extends React.Component
{
	componentDidMount() {
	  $('.contentWrap').css('height', '100%').css('height', '-=64px');
	  $(window).resize(() => {
	    $('.contentWrap').css('height', '100%').css('height', '-=64px');
	  });
	}
	render(){
		const colors=["#0F3438","#13273A","#07121D","#051905","#290F38","#0F3438"]
		return (
			<div className='Team'>
		  	<div className='contentWrap'>
		  	 <div className="section">
		    	<Slider id='7' >
		    	  <div id={`slider${7}`}>
		    	    <div className='slides center'>
		    	      <div className='middle-indicator' style={{zIndex: "4"}}>
		    	        <div className='left'>
		    	          <span id='prevSlide' className='waves-effect waves-light content-indicator' ><i className='medium material-icons middle-indicator-text'>chevron_left</i></span>
		    	        </div>
		    	        <div className='right'>
		    	          <span id='nextSlide' className='waves-effect waves-light content-indicator' ><i className='medium material-icons middle-indicator-text'>chevron_right</i></span>
		    	        </div>
		    	      </div>
		    	      {teams.map((_t,j) =>
		    	        <div key={_t} className='slide white-text' style={{background: colors[j]}}>
		    	          <div className='slide-content overflow' >
		    	            
		    	            <div>
		    	            	<h2 className="amber-text">{_t}</h2>
		    	            	{people[_t].map((p,i)=>
		    	            	
		    	            		<a href="http://www.facebook.com" key={i}>
		    	            		<div className='card'>
		    	            			<img src='https://www.limestone.edu/sites/default/files/user.png' />
		    	            			<h6> {p.name}</h6>
		    	            			<h6> {p.contact} </h6>
		    	            			<h6> {p.email} </h6>
		    	            		</div>
		    	            		</a>
		    	            	
		    	            	)}
		    	            </div>
		    	         
		    	          </div>
		    	        </div>
		    	      )}
		    	    </div>
		    	  </div>
		    	</Slider>
		       </div>
		  	</div>
			</div>
		);
	}

}

export default Team;
