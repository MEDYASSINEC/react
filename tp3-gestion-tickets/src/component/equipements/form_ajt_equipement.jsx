import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

function FormAjtEquipement ( { show, closeForm, equipement } ) {
    const [description, setDesc] = useState(equipement.description || "");
    const [categorie, setCategorie] = useState(equipement.categorie || "");
    const [etat, setEtat] = useState(equipement.etat || "");

    useEffect(()=> {
        setDesc(equipement.description || "");
        setCategorie(equipement.categorie || "");
        setEtat(equipement.etat || "");
    }, [show])

    const dispatch = useDispatch();

    const submitHundler = (e)=>{
        e.preventDefault();

        const desc = e.target.elements.desc.value;
        const categ = e.target.elements.categorie.value;
        const etat = e.target.elements.etat.value;

        if(!categ || !desc || !etat){
            alert('Veuillez remplir tous les champs');
            return;
        }

        if (!equipement){
            let newId;
            newId = Math.floor(Math.random() * 1000000);

            const newTicket = {
                id: newId,
                description: desc,
                categorie: categ,
                etat: etat,
                datePreUtilisation: new Date().toISOString().split('T')[0]
            };

            dispatch({type: 'equipements/addEquipement', payload: newTicket});
        }else{
            const updatedTicket = {
                id: equipement.id,
                description: desc,
                categorie: categ,
                etat: etat,
                datePreUtilisation: equipement.datePreUtilisation
            };
    
            dispatch({type: 'equipements/updateEquipement', payload: updatedTicket});

        }


        e.target.reset();

        closeForm()
        
    }

    

    return (
        <div className={show ? "overlay" : "modal-desactive"}>
            <div className="modal">
        <div className="form-container">
            <h3 className="form-title">Ajouter un equipement</h3>
            <button className='close-btn' onClick={() => closeForm()}>x</button>
            <form onSubmit={(e)=> submitHundler(e) } className="form">
                <div className="form-group">
                    <label htmlFor="desc" className="label">Description</label>
                    <input type="text" id="desc" className="input-field" value={description} onChange={(e)=>setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="categorie" className="label">Catégorie</label>
                    <input type="text" id="categorie" className="input-field" value={categorie} onChange={(e)=>setCategorie(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="etat" className="label">Etat</label>
                    <select name="etat" id="etat" className="input-field" value={etat} onChange={(e)=>setEtat(e.target.value)} >
                        <option value="disponible">Disponible</option>
                        <option value="en_service">En service</option>
                        <option value="en_stock">En stock</option>
                        <option value="en_maintenance">En maintenance</option>
                        <option value="en_reparation">En réparation</option>
                        <option value="hors_service">Hors service</option>
                        <option value="en_panne">En panne</option>
                        <option value="perdu">Perdu</option>
                    </select>
                </div>
                {!equipement ? 
                    (<input type="submit" className="btn form-btn" value="Enregistrer" />)
                :   (<input type="submit" className="btn form-btn" value="modifier" />) }
            </form>
        </div>
        </div>
    </div>
    )
}

export default FormAjtEquipement;