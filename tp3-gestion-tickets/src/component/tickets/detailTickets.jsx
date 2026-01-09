import { useDispatch, useSelector } from 'react-redux';
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

function TicketsList( {edit} ) {
  const tickets = useSelector(state => state.tickets) || [];
  const dispatch = useDispatch();

  const deleteT = (id, title)=> {
    if (window.confirm(`Tu veux vraiment supprimer le ticket '${title}'`)){
      dispatch({type: 'tickets/deleteTicket', payload: id} )  
    }
  }

  if (tickets.length === 0) {
    return <i>pas de tickets trouvé</i>
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>État</th>
            <th>Date création</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>{t.etat}</td>
              <td>{t.dateCreation}</td>
              <td>
                <span className='editBtn' onClick={() => edit(t)} ><MdModeEditOutline /></span>
                <span className='delBtn' onClick={()=> deleteT(t.id, t.title)}><FaRegTrashCan /></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TicketsList;
