import { supabase } from "../lib/supabase";


export async function getServerSideProps() {
const { data: events } = await supabase
.from("events")
.select("id, title, description, date, city")
.order("date", { ascending: true });


return { props: { events } };
}


export default function Home({ events }) {
return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
<ul>
{events.map((event) => (
<li key={event.id} className="mb-4 border p-3 rounded">
<h2 className="text-xl font-semibold">{event.title}</h2>
<p>{event.description}</p>
<p>{new Date(event.date).toLocaleString()} – {event.city}</p>
<a href={`/events/${event.id}`} className="text-blue-600">RSVP</a>
</li>
))}
</ul>
</div>
);
}