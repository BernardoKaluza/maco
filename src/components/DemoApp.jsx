import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import MarcarConsultaPopup from './MarcarConsultaPopup'
import popup from './CalendarPopup.js'
// import {utentes} from './data/utentes.js'
import Autocomplete from '@mui/material/Autocomplete';
import DarConsultaPopup from './DarConsultapopup'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import ptlocale from '@fullcalendar/core/locales/pt'
import CalendarPopup from '../components/CalendarPopup';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


var calendarApi = null
var select = null
var click = null



Array.prototype.indexOfForArrays = function(search)
{
  var searchJson = JSON.stringify(search);
  var arrJson = this.map(JSON.stringify); 

  return arrJson.indexOf(searchJson);
};



export default class DemoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {popupopen: false,
                  snack: false,
                  popupstate: { title: "",
                                paciente: "",
                              }
                  } ;
  }

    state = {
    weekendsVisible: true,
    currentEvents: [],
    daropen: false, //!importante
    


  }




  render() {
    return (
      <>
      <div className="demo-app">
          <FullCalendar
            locale= {ptlocale}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            ref= {this.calendarRef}
            
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventAdd={this.handleADD}
            eventChange={this.handleChange}
            eventRemove={this.handledelete}
           // eventsSet={this.handleEvents } // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
           
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
      </div>
      { this.state.popupopen && <MarcarConsultaPopup close={this.handlePopupClose.bind(this)} submit={this.handlePopupSubmit.bind(this)} />} 
      { this.state.daropen &&   <DarConsultaPopup    close={this.handlePopupClose.bind(this)} descricao= { click.event.title } paciente={ click.event.extendedProps.paciente} delete={this.handleapagar.bind(this)}/>}
      
      {this.state.snack && 
            <Snackbar
            
              open={ this.state.snack }
              onClose={this.handlesnackClose}
              autoHideDuration={2000}
              // other Snackbar props
            >
        
              <MuiAlert
                onClose={this.handlesnackClose}
                severity="success"
                elevation={6}
                variant="filled"
                sx={{ width: '100%' }}
              >
                Ação realizada com sucesso!
              </MuiAlert>
            </Snackbar>}
      
      </>
    )
  }

  
  // handleEvents = (events) => {
  //   this.state.currentEvent = events 
  // }
  
  
  handlesnackOpen = () => this.setState({ snack: true });

  handlesnackClose = () => this.setState({ snack: false });









  handleChange = (info) => {
    let events= JSON.parse(localStorage.getItem('events'))
    if (events.indexOfForArrays([info.oldEvent._def.title, info.oldEvent._def.extendedProps.paciente, info.oldEvent.startStr, info.oldEvent.endStr]) === 0) {
      events.pop()
    }
    else{
      events.splice(events.indexOfForArrays([info.oldEvent._def.title, info.oldEvent._def.extendedProps.paciente, info.oldEvent.startStr, info.oldEvent.endStr]),events.indexOfForArrays([info.oldEvent._def.title, info.oldEvent._def.extendedProps.paciente, info.oldEvent.startStr, info.oldEvent.endStr]))
    }
    localStorage.removeItem('events')
    localStorage.setItem('events', JSON.stringify(events))
    events.push([info.event._def.title, info.event._def.extendedProps.paciente, info.event.startStr, info.event.endStr])
    localStorage.setItem('events', JSON.stringify(events))
  }

  handledelete = (info) => {
    let events= JSON.parse(localStorage.getItem('events'))
    if (events.indexOfForArrays([info.event._def.title, info.event._def.extendedProps.paciente, info.event.startStr, info.event.endStr]) === 0) {
      events.pop()
    }
    else{
      events.splice(events.indexOfForArrays([info.event._def.title, info.event._def.extendedProps.paciente, info.event.startStr, info.event.endStr]),events.indexOfForArrays([info.event._def.title, info.event._def.extendedProps.paciente, info.event.startStr, info.event.endStr]))
    }
      localStorage.removeItem('events')
    localStorage.setItem('events', JSON.stringify(events))
  }


  handleADD = (info) => {
    console.log(info)
    let events= JSON.parse(localStorage.getItem('events'))
    if(events == null){
      events = []
    }
    events.push([info.event._def.title, info.event._def.extendedProps.paciente, info.event.startStr, info.event.endStr])
    localStorage.setItem('events', JSON.stringify(events))
  }

  handleapagar = () => {
    click.event.remove()
  }
  handlePopupClose = () => {
    this.setState({popupopen: false});
    this.setState({daropen: false});
    this.handlesnackOpen();
  }
  
  handlePopupSubmit = (title, paciente) => {
    const result = { title: title, paciente: paciente };
    this.setState(
      {popupstate: result}
    );
    console.log(result);
          // while(this.state.popupopen){
        //   console.log("waiting"); //! wait for popup to close
        // }
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: select.startStr,
            end: select.endStr,
            allDay: select.allDay,
            //random readable color
            //backgroundColor: '#'+((1<<24)*Math.random()|0).toString(16)
            
            extendedProps: {
              paciente: paciente
            //   nota: prompt('Escolha uma nota para o evento')
            }
          })
        }

  }



  handleDateSelect = (selectInfo) => {
    calendarApi = selectInfo.view.calendar
    if (calendarApi.view.type === 'dayGridMonth') {
      calendarApi.changeView('timeGridDay');
      calendarApi.gotoDate(selectInfo.start)
      calendarApi.unselect()
    }
     // clear date selection
    else{
      this.setState({popupstate: { title: "", paciente: ""}});
      this.setState({popupopen: true});
      select=selectInfo
      //let title = prompt('Escolha um tÃ­tulo para o evento')
      
      //calendarApi.unselect()
    
     
      
      
     

      calendarApi.unselect()
    }
  }

  handleEventClick = (clickInfo) => {
    click = clickInfo
    this.setState({daropen: true});
    
    
  }


}

function renderEventContent(eventInfo) {
  calendarApi = eventInfo.view.calendar;
    if (calendarApi.view.type === 'dayGridMonth') {
      return(<>
        <b>{eventInfo.timeText}</b>
        <i>{" " + eventInfo.event.title}</i>
        
      </>)
    }
    else{
      console.log(eventInfo.event.extendedProps.paciente)
      return (
      
        <>
          <b>{eventInfo.timeText}</b>
          <i>{" " + eventInfo.event.title + ",  "}</i>
          {eventInfo.event.extendedProps.paciente !== ""  && <i>{"Paciente: " + eventInfo.event.extendedProps.paciente}</i>}
    
        </>
      )
    }
}
