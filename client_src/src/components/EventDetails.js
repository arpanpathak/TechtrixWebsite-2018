import React from 'react';
import $ from 'jquery';
import '../assets/css/EventDetails.css';
class EventDetails extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      show: false
    };
  }
  componentDidMount()
  {
  	$(this.props.trigger).click(()=>{ 
  		$('#fsVidLoop').css('opacity','0');
  		$('#'+this.props.id).show('explode');
  		$('#iconFrame').css('opacity','0');
  		$('.Navigation').hide();
  	});

  	$('#'+this.props.id+' .close-btn').click(()=>{
  		$('#'+this.props.id+' .close-btn').addClass('animation');
  		$('#'+this.props.id).hide('glide');
  		$('#iconFrame').css('opacity','1');
  		$('#fsVidLoop').css('opacity','1');
  		$('.Navigation').show();
  	});
  }
  render(){
    return(
      
      <div className='eventDetails' id={ this.props.id }> 
      	<span className='close-btn'>&times;</span>
        <h1> {this.props.eventName}</h1>
        
      </div>
      
    );
  }
}

export default EventDetails;