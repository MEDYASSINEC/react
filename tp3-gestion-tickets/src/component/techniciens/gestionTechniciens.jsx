import { useEffect, useState } from "react";
import FormAjtTechnicien from "./from_ajt_technicien";
import DetailTechniciens from "./detailTechniciens";

function GestionTechnicien () {
    const [showForm, setShowForm] = useState(false);
    const [ techniciensToModify, setTicketsToModify ] = useState('');

    useEffect(()=>{
    if ( !showForm ) {
      setTicketsToModify('')
    }
  }, [showForm]);

    const edit = (technicien)=> {
        setShowForm(true);
        setTicketsToModify(technicien);
    }


    return (
    <>
        <h1 className="title">Gestion des techniciens</h1>
        <DetailTechniciens edit={edit} />
        <button className="btn btn-margin" onClick={() => setShowForm(true)}>Ajouter</button>
        <FormAjtTechnicien show={showForm} closeForm={() => setShowForm(false)} technicien={techniciensToModify} />
    </>
    )
}

export default GestionTechnicien;