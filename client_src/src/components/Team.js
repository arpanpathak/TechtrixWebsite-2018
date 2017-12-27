import React from 'react';
import Slider from './Slider';
import $ from 'jquery';
import '../assets/css/Team.css';
import '../assets/css/Slider.css';
import '../assets/data/team.js';

const teams=["Executive Heads","TECHNICAL HEADS","ROBOTICS EVENT HEADS","WEB DEVELOPMENT AND DESIGN","GAMING EVENT HEADS","CODING EVENT HEADS"];
var people={
	"Executive Heads":[
		{name: "ROHIT KUNDU",contact:"+91 9674672334",email:"dummy",desg:"GENERAL SECRETARY",fb: "https://www.facebook.com/rohit.kundu.148"},
		{name: "BARUN KUMAR SINGH",contact:"+91 8348591468",email:"dummy",desg:"ASST. GENERAL SECRETARY",img: require('../assets/images/team/barun.jpg'), fb: "https://www.facebook.com/BSP2596"},
			
	],
	"ROBOTICS EVENT HEADS": [
		{name: "PRASHANT UPADHYAY",contact: "9051739884",email: "prashantuy36@gmail.com",desg:"TECHNICAL SECRETARY",img: require('../assets/images/team/prashant.jpg'), fb: "https://www.facebook.com/prashant.upadhyay.5220"},
		{name: "SAURABH BAGLA",contact: "7278103385",email: "baglasaurabh6@gmail.com",desg:"TECHNICAL SECRETARY"},
	],
	"TECHNICAL HEADS": [
		{name: "HIMADRI BISWAS",contact: "+91 8296009994",email: "dummy",fb: "https://www.facebook.com/himadribiswas95",img: require('../assets/images/team/himadri.jpg')},
		{name: "PRASHANT UPADHYAY",contact: "+91 9051739884",email: "dummy",fb: "https://www.facebook.com/prashant.upadhyay.5220",img: require('../assets/images/team/prashant.jpg')}
	],
	"WEB DEVELOPMENT AND DESIGN": [
		{name: "Pranit Bose",email: "pranitbose12@gmail.com",contact: "8420103465", fb: "https://www.facebook.com/pranitbose17",img: require('../assets/images/team/pranit.jpg')},
		{name: "Arpan Pathak",email: "arpan.pathak47@gmail.com",contact: "7686009276",img: require('../assets/images/team/arpan.jpg'),fb: "https://www.facebook.com/arpan.pathak.5"}
	],
	"CODING EVENT HEADS": [
		{name: "Pranit Bose",email: "pranitbose12@gmail.com",contact: "8420103465",desg: "LOGIA AND WEB DESIGN",img: require('../assets/images/team/pranit.jpg'),fb: "https://www.facebook.com/pranitbose17"},
		{name: "Arpan Pathak",email: "arpan.pathak47@gmail.com",contact: "7686009276",desg: "LOGIA AND BUGS FUNNY",img: require('../assets/images/team/arpan.jpg'),fb: "https://www.facebook.com/arpan.pathak.5"},
		{name: "PRASHANT UPADHYAY",contact: "9051739884",email: "prashantuy36@gmail.com",desg:"BUGS FUNNY AND WEB DESIGN",img: require('../assets/images/team/prashant.jpg'),fb: "https://www.facebook.com/prashant.upadhyay.5220"},
	],
	"GAMING EVENT HEADS": [
		{name: "Kaustav Biswas",contact: "9477305001",email:"kbdudola@gmail.com"},
		{name: "ABHRAK CHATTERJEE",contact: "8585044444",email:"abhrakchatterjee@gmail.com"},
	],
};

class Team extends React.Component
{
	componentDidMount() {
	  $('.contentWrap').css('height', '100%').css('height', '-=64px');
	  $(window).resize(() => {
	    $('.contentWrap').css('height', '100%').css('height', '-=64px');
	  });
	}
	render(){
		const colors=["#0F3438","#13273A","#07121D","rgba(138, 13, 39,1)","#290F38","#0F3438"];
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
		    	            	<h2 className="amber-text" style={{fontFamily: 'latina'}}>{_t}</h2>
		    	            	<div>
		    	            	{people[_t].map((p,i)=>
		    	           
		    	          
		    	            		<div className='card' key={i}>
		    	            			<div class="pin"> <i className="material-icons" style={{fontSize: '30px'}}>attach_file</i></div>
		    	            			<div className="image-container">
		    	            				<a href={p.fb}><img src={ p.img } /></a>
		    	            				<span className="fb">f</span>
		    	            			</div>
		    	            			<h6 className="name"> {p.name}</h6>
		    	            			<h6 className="name">[ {p.desg} ]</h6>
		    	            			<h6 className="info"> <i className="material-icons" style={{fontSize: '15px'}}>phone</i> {p.contact} </h6>
		    	            			<h6 className="info"><i className="material-icons" style={{fontSize: '15px'}}>email</i> {p.email} </h6>
		    	            		</div>
		    	            		
		    	            	
		    	            	)}
		    	            	</div>
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
