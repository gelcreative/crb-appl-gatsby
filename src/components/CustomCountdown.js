import React from "react"
import styled from "styled-components"
import Countdown from 'react-countdown-now'

// Random component

// const Completionist = () => <div><h2 className="white">Tier 3 Tickets Coming Soon...</h2><p>Don't miss out! Purchase your tickets before it sells out!</p><br /><br /><a className="button-dark" href="https://www.eventbrite.ca/e/curb-appeal-2019-tickets-61866109198?" target="_blank">FRIDAY MAY 31 AT 7AM</a></div>

const Completionist = () => <div><h2 className="white">Tickets Now Available!</h2><p>Don't miss out! Purchase your tickets before it sells out!</p><br /><br /><a className="button-dark" href="https://www.eventbrite.ca/e/curb-appeal-2019-tickets-61866109198?" target="_blank">BUY TICKETS NOW</a></div>
// const Completionist = () => <div><h2 className="white">Curb Appeal Insider Tickets Now Available!</h2><p>available via to VIPs through your email notification</p></div>

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
    return <div><h2 className="white">Curb Appeal Insider Tier 3 Tickets Coming Soon...</h2><br /><time date={total}><span class="days">Days<em>{days}</em></span><span class="hours">Hours<em>{hours}</em></span><span class="minutes">Minutes<em>{minutes}</em></span><span class="seconds">Seconds<em>{seconds}</em></span></time></div>;
  }
};

const datelogic = () => {
  // Set date and time for countdown timer

  //dates have to be in reverse order in the array ( array keys count down )
  var thedates = [];
  // thedates['3'] = new Date("May 17, 2019 07:00:00").getTime();
  // thedates['2'] = new Date("May 24, 2019 07:00:00").getTime();
  thedates['1'] = new Date("May 31, 2019 07:00:00").getTime();
  //set ticket window (in milliseconds)
  //current formula = (hours)*(millisconds)*(seconds)*(minutes)
  var ticketwindow = 24*1000*60*60;

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
          @media screen and (max-width:600px){
            font-size:.75em; 
          }
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
            @media screen and (max-width:600px){
              width:.75em;
              height:1.25em;
              line-height:1.25em;
              font-size:1.5em;
            }
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