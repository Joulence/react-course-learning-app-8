import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'some event'
    },
    {
        id: 'e2',
        title: '2 some event'
    },
    {
        id: 'e3',
        title: ' 3some event'
    },
];

function EventsPage() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default EventsPage;