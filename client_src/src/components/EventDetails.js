import React from 'react';
class EventDetails extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      show: false
    };
  }
  render(){
    return(
      
      { state.show && <div className='eventDetails'> 
        <h1>TITLE</h1>
        
      </div>
      }
    );
  }
}

export default EventDetails;