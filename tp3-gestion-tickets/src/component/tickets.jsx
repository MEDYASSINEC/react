import { useSelector } from 'react-redux';

function TicketsList() {
  const tickets = useSelector(state => state.tickets);
console.log(tickets);
  return (
    <ul>
      {tickets.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}

export default TicketsList;