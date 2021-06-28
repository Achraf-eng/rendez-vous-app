import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import 'react-calendar/dist/Calendar.css';


export default class DemoApp extends React.Component {
    render() {
      return (
          <div style={{width:"600px", color:"black"}}>
        <FullCalendar
          
          plugins={[ dayGridPlugin, interactionPlugin  ]}
          dateClick={this.handleDateClick}
        
        />
       
        </div>
        
      )
    }
    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.date)
        
      }
      
  }
