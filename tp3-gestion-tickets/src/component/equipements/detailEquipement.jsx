import { useDispatch, useSelector } from 'react-redux';
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

function DetailEquipement( {edit} ) {
  const equipements = useSelector(state => state.equipements) || [];
  const dispatch = useDispatch();

  const deleteT = (id)=> {
    if (window.confirm(`Tu veux vraiment supprimer l'équipement '${id}'`)){
      dispatch({type: 'equipements/deleteEquipement', payload: id} )  
    }
  }

  if (equipements.length === 0) {
    return <i>pas de équipements trouvé</i>
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>categorie</th>
            <th>État</th>
            <th>Date première utilisation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {equipements.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.description}</td>
              <td>{t.categorie}</td>
              <td>{t.etat}</td>
              <td>{t.datePreUtilisation}</td>
              <td>
                <span className='editBtn' onClick={() => edit(t)} ><MdModeEditOutline /></span>
                <span className='delBtn' onClick={()=> deleteT(t.id)}><FaRegTrashCan /></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DetailEquipement;
