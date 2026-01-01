import { useDispatch, useSelector } from 'react-redux';
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

function DetailTechniciens( {edit} ) {
  const techniciens = useSelector(state => state.technicien) || [];
  const dispatch = useDispatch();

  const deleteT = (id, nom)=> {
    if (window.confirm(`Tu veux vraiment supprimer le technicien '${nom}'`)){
      dispatch({type: 'techniciens/deleteTechnicien', payload: id} )  
    }
  }

  if (techniciens.length === 0) {
    return <i>pas de techniciens trouvé</i>
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Numéro de tel</th>
            <th>Date adhésion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {techniciens.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.nom}</td>
              <td>{t.specialite}</td>
              <td>{t.tel}</td>
              <td>{t.dateAdhesion}</td>
              <td>
                <span className='editBtn' onClick={() => edit(t)} ><MdModeEditOutline /></span>
                <span className='delBtn' onClick={()=> deleteT(t.id, t.nom)}><FaRegTrashCan /></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DetailTechniciens;
