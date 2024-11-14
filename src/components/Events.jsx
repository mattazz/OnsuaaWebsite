import EventCard from "./EventCard";

function Events() {
  return (
    <div>
      <h1>Events</h1>
      <div className="flex gap-10 p-3 ">
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Events;