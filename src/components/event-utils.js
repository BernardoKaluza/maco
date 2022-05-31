
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let events = []

if (localStorage.getItem('events') !== null){
  events=  JSON.parse(localStorage.getItem('events'))
}



const nomequalquer = () => {

    let INITIAL_EVENTS = [{id: 999,
                           title: 'Consulta',
                           start: "2022-06-02T15:00:00+01:00",
                           end: "2022-06-02T15:30:00+01:00",
                           "extendedProps": {
                               "paciente": ""
                           }}]
    for (var i = 0; i < events.length; i++) {
      INITIAL_EVENTS.push({
        id: createEventId(),
        title: events[i][0],

        start: events[i][2],
        end: events[i][3],
        extendedProps: {
          paciente: events[i][1]
        }
      })
    }
    return INITIAL_EVENTS
  }



export const INITIAL_EVENTS = nomequalquer()

export function createEventId() {
  return String(eventGuid++)
}
