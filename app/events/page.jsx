import { getEvents } from "@/sanity/fetching/events.fetch";
import EventCard from "@/app/_components/Events/EventCard";

export default async function EventsPage(){
  
  const events = await getEvents();

  return (
  <>
  <h1 className="mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-4xl p-2 text-center w-full">Events</h1>
    
  {!events.length && <p className="text-xl text-center p-2">No Events Yet</p>}

  <div id="events" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {events.map((event)=> <EventCard key={event._id} event={event} />)}
  </div>
  </>
  )
}
