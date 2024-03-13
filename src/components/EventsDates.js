import { eventsList } from '../data/eventsList.js'
import { format } from 'date-fns';
import frLocale from 'date-fns/locale/fr';

function EventsDates(){

    return (
        <div id="eventsDates" className="greyHolder">
            <div className="eventsHolder">
                <h2>Agenda</h2>
            
                {eventsList.map((event) => (
                    <div className="event-container" key={event.id}>
                        <div className="event-date">{format(new Date(event.eventDate), 'dd/MM/yyyy HH:mm', { locale: frLocale })}</div>
                        <div className="event-name">{event.eventName}</div>
                        <div className="event-place">{event.eventPlace}</div>
                        {(event.eventDescription !== '' && <div style={{ whiteSpace: 'pre-line' }}>{event.eventDescription}</div>)}
                    </div>
                ))}                

            </div>
        </div>
    )
}

export default EventsDates