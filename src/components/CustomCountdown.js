import React from "react"
import styled from "styled-components"
import Countdown from 'react-countdown-now'

// Random component
const Completionist = () => <div><h2 className="white">Tickets now available!</h2><p>Don't miss out! Purchase your tickets before it sells out!</p><br /><br /><button className="button-dark">BUY TICKETS NOW</button></div>

// Renderer callback with condition

const renderer = ({ total, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;

  }else {
    
    //Get the actual date for Accessibility purposes
    var today = new Date();
    total = today.getTime() + total;
    total = new Date(parseInt(total));
    //Render the timer
    return <div><h2 className="white">Tickets coming soon...</h2><br /><time date={total}><span class="days">Days<em>{days}</em></span><span class="hours">Hours<em>{hours}</em></span><span class="minutes">Minutes<em>{minutes}</em></span><span class="seconds">Seconds<em>{seconds}</em></span></time></div>;
  }
};

const datelogic = () => {
  // Set date and time for countdown timer

  //dates have to be in reverse order in the array ( array keys count down )
  var thedates = [];
  thedates['3'] = new Date("April 30, 2019 10:28:00").getTime();
  thedates['2'] = new Date("April 19, 2019 01:15:00").getTime();
  thedates['1'] = new Date("April 22, 2019 01:15:00").getTime();
  //set 2 hour ticket window
  var ticketwindow = 2*1000*60*60;

  var currentdate=Date.now();
  var timerdate='';
  for(var i = 0;i<thedates.length;i++){
      if(currentdate < thedates[i]){
        timerdate = thedates[i];
      } else if(currentdate < (thedates[i]+ticketwindow)) {
        //adds a two hour window for ticket sales
        timerdate = null;
      } else {
        // If there are no ticket windows open, show the ticket buy option
        timerdate = null;        
      }
  };
  

  return timerdate;
};

const StyledCountdown = styled.div`  
      height:120px;      
      time {
        margin-top:40px;
        text-align:center;        
        span {
          display:inline-block;
          margin-right:5px;
          text-transform: uppercase;
          line-weight:100;          
          em {
            position:relative;
            display:inline-block;
            border:1px solid #ccc;
            font-size:2em;
            border-radius:5px;
            margin-top:15px;
            padding:10px 20px;
            background:#ebebeb;
            color:#a4a4a4;            
            display:block;
            width:1.25em;
            height:1.25em;
            line-height:1.25em;
            &:after {            
              width:2.31em;
              margin-left:-20px;
              display:block;
              // border: .5px solid rgba(0,0,0,1);
              position:absolute;
              top:48%;
              content:'';
            }          
          }
        }
      }
      `

const CustomCountdown = () => {
        return(
            <StyledCountdown>
              <Countdown
                date={datelogic()}
                renderer={renderer}
              />
            </StyledCountdown>
          )
        }

export default CustomCountdown;