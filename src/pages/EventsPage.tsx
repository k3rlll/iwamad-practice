import { events } from '../data/events';
import { EventCard } from '../components/EventCard';

export function EventsPage() {
  return (
    <div className="events-page">
      <h1>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
