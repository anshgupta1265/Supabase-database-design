import { useRouter } from "next/router";
import { supabase } from "../../lib/supabase";
import { useState } from "react";


export async function getServerSideProps({ params }) {
const { data: event } = await supabase
.from("events")
.select("id, title, description, date, city")
.eq("id", params.id)
.single();


return { props: { event } };
}


export default function EventPage({ event }) {
const [status, setStatus] = useState(null);
const router = useRouter();


async function handleRSVP(choice) {
const userId = "replace-with-authenticated-user-id"; // For demo, mock user
const { error } = await supabase.from("rsvps").upsert({
user_id: userId,
event_id: event.id,
status: choice,
});
if (!error) setStatus(choice);
}


return (
<div className="p-6">
<h1 className="text-2xl font-bold">{event.title}</h1>
<p>{event.description}</p>
<p>{new Date(event.date).toLocaleString()} – {event.city}</p>


<div className="mt-4">
<button onClick={() => handleRSVP("Yes")} className="mr-2 bg-green-500 text-white px-4 py-2 rounded">Yes</button>
<button onClick={() => handleRSVP("No")} className="mr-2 bg-red-500 text-white px-4 py-2 rounded">No</button>
<button onClick={() => handleRSVP("Maybe")} className="bg-yellow-500 text-white px-4 py-2 rounded">Maybe</button>
</div>


{status && <p className="mt-2">You RSVPed: {status}</p>}
</div>
);
}