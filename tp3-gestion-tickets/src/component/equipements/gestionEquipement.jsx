import { useEffect, useState } from "react";
import DetailEquipement from "./detailEquipement";
import FormAjtEquipement from "./form_ajt_equipement";

function GestionEquipement () {
    const [showForm, setShowForm] = useState(false);
    const [ equipementsToModify, setEquipementToModify ] = useState('');

    useEffect(()=>{
    if ( !showForm ) {
      setEquipementToModify('')
    }
  }, [showForm]);

    const edit = (equipement)=> {
        setShowForm(true);
        setEquipementToModify(equipement);
    }


    return (
    <>
        <h1 className="title">Gestion des equipements</h1>
        <DetailEquipement edit={edit} />
        <button className="btn btn-margin" onClick={() => setShowForm(true)}>Ajouter</button>
        <FormAjtEquipement show={showForm} closeForm={() => setShowForm(false)} equipement={equipementsToModify} />
    </>
    )
}

export default GestionEquipement;