import { useEffect, useState } from "react";
import FormAjtTicket from "./form_ajt_ticket";
import TicketsList from "./detailTickets";

function GestionTickets () {
    const [showForm, setShowForm] = useState(false);
    const [ ticketsToModify, setTicketsToModify ] = useState('');

    useEffect(()=>{
    if ( !showForm ) {
      setTicketsToModify('')
    }
  }, [showForm]);

    const edit = (ticket)=> {
        setShowForm(true);
        setTicketsToModify(ticket);
    }


    return (
    <>
        <h1 className="title">Gestion des tickets</h1>
        <TicketsList edit={edit} />
        <button className="btn btn-margin" onClick={() => setShowForm(true)}>Ajouter</button>
        <FormAjtTicket show={showForm} closeForm={() => setShowForm(false)} ticket={ticketsToModify} />
    </>
    )
}

export default GestionTickets;